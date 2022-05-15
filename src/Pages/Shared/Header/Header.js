import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelLogout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='header-logo' src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <p className='pointer text-secondary m-2' onClick={handelLogout}>Logout</p> : <Nav.Link as={Link} to="Login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="additems">AddItems</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manage">ManageInventory</Nav.Link>
                                    <Nav.Link as={Link} to="myItem">MyItem</Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;