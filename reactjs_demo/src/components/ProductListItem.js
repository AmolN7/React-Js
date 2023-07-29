import {Card,Button} from "react-bootstrap"
export function ProductListItem(props) {
    
    const element =
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.carList.carImage} />
        <Card.Body>
            <Card.Title>{props.carList.brand} {props.carList.carName} </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
        </Card.Body>
    </Card>
    </>
    return element;
}