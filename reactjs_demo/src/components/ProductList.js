import { ProductListItem } from "./ProductListItem"; 
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export function ProductList(props){   
        
    const element =
    <>    
        <Row xs={1} md={3} className="g-4">
         {
            props.carList.map((car)=>
                 <Col  key={car.id}>
                    <ProductListItem carList={car} />
                </Col>
            )
        }
        </Row>
    </>
    return element;
}