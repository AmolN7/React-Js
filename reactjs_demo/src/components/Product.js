import { ProductList } from "./ProductList";
import { carList } from "../data/data";
import {Card,Button, Container} from "react-bootstrap"
export function Product() {

    const element = 
    <>
        <Container>
        <ProductList carList={carList} />
        </Container>
       
    </>
    return element;
}