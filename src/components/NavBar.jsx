import "../assets/css/NavBar.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


function NavScrollExample() {

  return (
    
    <Navbar className="HeaderNavBar" expand="lg">
      <Container fluid>
      
        <Navbar.Brand href="/"><Link to={"/"}>PetShopParraga</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to={"/Category/Higiene"}>Higiene</Link></Nav.Link>
            <Nav.Link><Link to={"/Category/Juguetes"}>Juguetes</Link></Nav.Link>
            <Nav.Link><Link to={"/Category/Alfombras"}>Alfombras</Link></Nav.Link>
          </Nav>
          <Link to={"/Carrito"}>
          <CartWidget></CartWidget>
          </Link>
          <Form className="d-flex formStyle">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;