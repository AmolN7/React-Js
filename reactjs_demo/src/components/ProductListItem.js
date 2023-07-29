import {Card,Button,Form} from "react-bootstrap"
 
export function ProductListItem(props) {
    
    const element =   
    <Card style={{  width: '17rem', height:'28rem',padding:'5px', margin:'5px' }} >
        
        <Card.Body>
            <Card.Title>{props.carList.brand} {props.carList.carName} </Card.Title>
            <Form.Text id="passwordHelpBlock" muted>
            <ul className="list-inline">
                <li className="list-inline-item">&bull; {props.carList.carType}</li> 
                <li className="list-inline-item">&bull; {props.carList.sits}</li> 
                <li className="list-inline-item">&bull; {props.carList.fuleType}</li> 
            </ul>
            </Form.Text>
            <Card.Img variant="top" src={props.carList.carImage} />
            <Form.Text id="passwordHelpBlock" muted>
                <ul className="list-inline">
                    <li className="list-inline-item">&bull; {props.carList.variants}</li> 
                    <li className="list-inline-item">&bull; Available with {props.carList.colors.length} Colors</li>
                     
                </ul>
                <ul className="list-inline">
                    {
                        props.carList.colors.map((color)=><li className="list-inline-item" style={{backgroundColor:color,  padding:'10px',border: '1px grey solid',borderRadius: '30px' }}></li>)
                    }
                     
                </ul>
            </Form.Text>
            <Card.Text><strong>{props.carList.price}</strong></Card.Text>
            <Button variant="primary">Book Now</Button>
        </Card.Body>
    </Card>
     
    return element;
}