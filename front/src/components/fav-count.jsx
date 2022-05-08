export const FavCount = (props) => {
    return (
        <div>
            {props.count > 0 ?
                (<h5><span className="badge badge-pill badge-success pull-right">Favorites: {props.count}</span></h5>)
                : (<h5><span className="badge badge-pill badge-warning pull-right">No favorites</span></h5>)}
        </div>
    );
}
