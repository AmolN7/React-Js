import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Header } from "./header/Header"
import { Leftbar } from "./leftbar/Leftbar"
import { Middle } from "./Middle"
import { Footer } from "./footer/Footer"

export function Layout(){
    const element =
    <>    
    <Container fluid="md">
      <Row>        
        <Col ><Header /></Col>
      </Row>
      <Row>
        <Col sm ={4}><Leftbar /></Col>
        <Col sm={8}><Middle /></Col>         
      </Row>
      <Row>        
        <Col ><Footer /></Col>
      </Row>
    </Container>
    </>
    return element;
}