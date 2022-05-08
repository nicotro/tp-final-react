export function ButtonFav(props) {
    const { id, isFav, addToFav, removeFromFav } = props

    const addToFavButton = (e) => {
        if (!isFav(id)) {
            addToFav(id)
        } else {
            removeFromFav(id)
        }

    }
    return (
        <>
        {isFav(id) 
        ?
            <button className="btn btn-danger m-1" onClick={addToFavButton}>Remove from favorites</button>
            :    
            <button className="btn btn-success m-1" onClick={addToFavButton}>Add To favorites</button>
        }
        </>
    )
}