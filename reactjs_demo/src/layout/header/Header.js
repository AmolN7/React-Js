import Carousel from 'react-bootstrap/Carousel';
import {carouselsData } from '../../data/data'
export function Header() {
    const element = 
    <>
    <Carousel>
        { carouselsData.map((offer)=>  
            <Carousel.Item key={offer.id}>
                <img
                className="d-block w-100"
                src={offer.offerImage}
                alt={offer.offerName}
                />
                <Carousel.Caption>
                <h3>{offer.offerName}</h3>
                <p>{offer.description}</p>
                </Carousel.Caption>
            </Carousel.Item>  
            )}      
    </Carousel>
    </>

    return element
}