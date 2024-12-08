import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="md" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">Proshop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link> */}
                        <Nav.Link href="/cart">
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                        <Nav.Link href="/login">
                            <FaUser /> Sign in 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header