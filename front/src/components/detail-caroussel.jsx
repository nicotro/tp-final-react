import './../style/detail-caroussel.css'

export const DetailCaroussel = (props) => {
    const pictures = props.pictures
    return (
        <div className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                {pictures.length > 1
                    ?
                    (pictures.slice(1).map((p, i) => (
                        <li key={i} data-target="#carouselIndicators" data-slide-to={(i + 1)}></li>
                    )))
                    :
                    <></>
                }
            </ol>

            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img className="d-block h-100 mx-auto mt-2 img-thumbnail" src={pictures[0]} alt="1" />
                </div>
                {pictures.length > 1
                    ?
                    (pictures.slice(1).map((p, i) => (
                        <div key={i} className="carousel-item" >
                            <img className="d-block v-100 mx-auto mt-2 img-thumbnail" src={p} alt={(i + 2)} />
                        </div>
                    )))
                    :
                    <></>
                }
            </div>

            <a className="carousel-control-prev " href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div >
    )
}


