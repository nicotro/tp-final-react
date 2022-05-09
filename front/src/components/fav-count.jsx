import { Link } from "react-router-dom";

export const FavCount = (props) => {
    return (
        <div>
            {props.count > 0 ?
                (<h5><Link to="/favorites" className="nav-link badge badge-pill badge-success pull-right">Favorites: {props.count}</Link></h5>)
                : (<h5><span className="badge badge-pill badge-warning pull-right">No favorites</span></h5>)}
        </div>
    );
}
