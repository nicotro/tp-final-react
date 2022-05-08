/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
import { PureComponent } from "react";
import { getAddByIdService } from "../services/add-service";
import { withNavigate } from "../tools/with-navigate";
import { withParams } from "../tools/with-params";
import { ButtonFav } from "./button-fav";
import { DetailCaroussel } from "./detail-caroussel";

class DetailAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            add: undefined
        }
    }

    componentDidMount() {
        const id = this.props.params.id
        getAddByIdService(id).then(res => {
            this.setState({ add: res.data });
        })
    }

    render() {
        const add = this.state.add
        return (
            <div>
                {add === undefined
                    ?
                    <div className="alert alert-info mt-3 text-center">loading ...</div>
                    :
                    (<div>
                        <h3 className='text-center'>Ad #{add.id} details</h3>
                        <div className='container'>
                            <div className="card mx-auto mb-3 text-start bg-light" style={{ width: '32rem' }}>
                                <DetailCaroussel pictures={add.pictures} className="card-img-top" alt="product" />
                                <div className="card-body">
                                    <h5 className="card-title">{add.title}</h5>
                                    <p className="card-text">{add.content}</p>
                                </div>
                                <ButtonFav id={add.id} isFav={this.props.isFav} addToFav={this.props.addToFav} removeFromFav={this.props.removeFromFav}/>
                                <button className="btn btn-primary m-1" onClick={e => this.props.navigate("/")}>Home</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default withNavigate( withParams(DetailAdd))
