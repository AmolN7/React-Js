import { ProductList } from "./ProductList";
import { carList } from "../data/data";
//import {Card,Button, Container} from "react-bootstrap"
export function Product() {

    const element = 
    
        <div className="container">
        <ProductList carList={carList} />
        </div>
       
    
    return element;
}