/* eslint-disable no-useless-constructor */
import { PureComponent } from "react";
import { Routes, Route } from 'react-router-dom';
import { getAddByIdService, searchAddsService } from "../services/add-service";
import DetailAdd from "./detail-add";
import { FavAdd } from "./fav-add";
import FormAdd from "./form-add";
import { HomeAdd } from "./home-add";
import { NavAdd } from "./nav-add";

class AddApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            favorites: [],
            add: undefined
        }
    }

    isFav = (id) => {
        return this.state.favorites.find(a => a.id == id) != undefined
    }

    addToFav = (id) => {
        getAddByIdService(id).then(res => {
            this.setState({ add: res.data });
        })
        if (this.state.add != undefined) {
            this.setState({ favorites: [...this.state.favorites, { ...this.state.add }] })
        }
    }

    removeFromFav = (id) => {
        const tmpFav = this.state.favorites.filter(a => a.id != id)
        this.setState({ favorites: [...tmpFav] });
    }

    findAdd = (id) => {
        searchAddsService (id).then(res => {
            this.setState({ add: res.data })
        })
    }

    render() {
        return (
            <div>
                <NavAdd></NavAdd>
                <Routes>
                    <Route path="/" element={<HomeAdd/>}></Route>
                    <Route path="/form" element={<FormAdd navigate={this.props.navigate} />}></Route>
                    {/* <Route path="/detail/:id" element={<DetailAdd findAdd={this.findAdd} id={this.state.add.id} isFav={this.isFav} addToFav={this.addToFav} removeFromFav={this.removeFromFav} />}></Route> */}
                    <Route path="/detail/:id" element={<DetailAdd />}></Route>
                    <Route path="/favorites" element={<FavAdd />}></Route>
                </Routes>
            </div>
        );
    }
}

export default AddApp; 