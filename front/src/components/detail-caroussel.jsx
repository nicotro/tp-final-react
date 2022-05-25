import './../style/detail-caroussel.css'
import Carousel from 'react-bootstrap/Carousel'

export const DetailCaroussel = (props) => {
    const pictures = props.pictures
    return (
        <Carousel>
            {pictures.map((p, i) => (
                <Carousel.Item key={i}>
                    <img className="d-block h-100 mx-auto mt-2 img-thumbnail" src={p} alt={(i + 1)} />
                </Carousel.Item>
            ))
            }
        </Carousel >
    )
}


