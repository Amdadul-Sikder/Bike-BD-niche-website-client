import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <HashLink to="/home" className='logo'> BIKE BD </HashLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <HashLink
                            to="/home#home"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >HOME</HashLink>
                        <HashLink
                            to="/home#products"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >PRODUCTS</HashLink>
                        <HashLink
                            to="/explore"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >EXPLORE</HashLink>
                        <HashLink
                            to="/home#contact"
                            className='nav-menu'
                            activeClassName="selected"
                            activeStyle={{ color: 'red' }}
                        >CONTACT</HashLink>


                        {user?.email ?
                            <div>
                                <HashLink
                                    to="/dashboard"
                                    className='nav-menu'
                                    activeClassName="selected"
                                    activeStyle={{ color: 'red' }}
                                >DASHBOARD</HashLink>
                                < Button onClick={logOut} className='nav-menu' variant="outline-light">Logout</Button>
                            </div>
                            :
                            <HashLink
                                to="/login"
                                className='nav-menu'
                                activeClassName="selected"
                                activeStyle={{ color: 'red' }}
                            >LOGIN</HashLink>
                        }

                        <Navbar.Text className='ms-2'>{user?.displayName}</Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;