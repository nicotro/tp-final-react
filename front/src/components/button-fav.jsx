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
            {/* <button className="btn btn-primary m-1" onClick={addToFavButton}>{isFav(id) ? 'Remove from favorites' : 'Add To favorites'}</button> */}
            <button className="btn btn-secondary m-1" disabled>Favorites button</button>
        </>
    )
}