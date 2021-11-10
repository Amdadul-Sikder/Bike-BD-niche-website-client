import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavHashLink to="/home" className='logo'> BIKE BD </NavHashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavHashLink
                            to="/home"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >HOME</NavHashLink>
                        <NavHashLink
                            to="/about"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >ABOUT US</NavHashLink>
                        <NavHashLink
                            to="/products"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >PRODUCTS</NavHashLink>
                        <NavHashLink
                            to="/contact"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >CONTACT</NavHashLink>
                        <NavHashLink
                            to="/login"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >LOGIN</NavHashLink>
                        <NavHashLink
                            to="/register"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >REGISTER</NavHashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;