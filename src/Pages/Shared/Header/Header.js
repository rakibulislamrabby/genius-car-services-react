import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.png"

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} height="30" alt="" />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link to="/">Home</Nav.Link>
                        <Nav.Link to={"/features"}>Features</Nav.Link>
                        <Nav.Link to={"/pricing"}>Pricing</Nav.Link>
                        <Nav.Link to={"/about"}>About</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;