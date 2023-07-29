import { ProductListItem } from "./ProductListItem";
import {Card,Button} from "react-bootstrap"
export function ProductList(props){   
        
    const element =
    <>    
        {
            props.carList.map((car)=>
                <div key={car.id} className="col-md-3 pb-4">
                    <ProductListItem carList={car} />
                </div>
            )
        }
        <div className="row">
            
        </div>
    </>
    return element;
}