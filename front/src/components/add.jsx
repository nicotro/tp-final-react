/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom'

export function Add(props) {
    const add = props.currentAdd
    return (
        <div className="col-10 mx-auto">
            <div className="card m-3 bg-light">
                <div className="row no-gutters">
                    <div className="col-3">
                        <img src={add.pictures[0]} className="d-block h-100 mx-auto img-thumbnail" alt="Add picture" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{add.title}</h5>
                            <p className="card-text">{(add.content).substring(0, 100)}<em> (...)</em></p>
                            <p className="card-text">
                                {add.id != 0
                                    ?
                                    <Link to={"/detail/" + add.id}>See ad Details</Link>
                                    :
                                    <span></span>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
