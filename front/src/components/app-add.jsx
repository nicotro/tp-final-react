/* eslint-disable no-useless-constructor */
import { PureComponent } from "react";
import { Routes, Route } from 'react-router-dom';
import { getAddByIdService, searchAddsService } from "../services/add-service";
import DetailAdd from "./detail-add";
import FormAdd from "./form-add";
import { HomeAdd } from "./home-add";
import { ListAdds } from "./list-adds";
import { NavAdd } from "./nav-add";

class AddApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            add: undefined,
        }
    }

    isFav = (id) => {
        return this.state.favorites.find(a => a.id == id) != undefined
    }

    addToFav = (id) => {
        getAddByIdService(id).then(res => {
            if (res.data != undefined) 
                this.setState({ favorites: [...this.state.favorites, res.data] })
        })

    }

    removeFromFav = (id) => {
        const tmpFav = this.state.favorites.filter(a => a.id != id)
        this.setState({ favorites: [...tmpFav] });
    }

    findAdd = (id) => {
        searchAddsService(id).then(res => {
            this.setState({ add: res.data })
        })
    }

    render() {
        return (
            <div>
                <NavAdd total={this.state.favorites.length}></NavAdd>
                <Routes>
                    <Route path="/" element={<HomeAdd isFav={this.isFav} addToFav={this.addToFav} removeFromFav={this.removeFromFav} />}></Route>
                    <Route path="/form" element={<FormAdd navigate={this.props.navigate} />}></Route>
                    <Route path="/detail/:id" element={<DetailAdd findAdd={this.findAdd} add={this.state.add} isFav={this.isFav} addToFav={this.addToFav} removeFromFav={this.removeFromFav} />}></Route>
                    <Route path="/favorites" element={<ListAdds adds={this.state.favorites} isFav={this.isFav} addToFav={this.addToFav} removeFromFav={this.removeFromFav}/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default AddApp; 