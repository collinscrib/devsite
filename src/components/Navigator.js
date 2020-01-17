import React, { Component } from 'react';

import './Navigator.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigator extends Component {
    render() {
        return (
            <div id="navigator">
                <Navbar variant="dark" expand="lg" fixed="top" className="main-bg">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Collin Scribner'}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav pullLeft variant="pills">
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/professional">
                                <Nav.Link>Resume</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/links">
                                <Nav.Link>Links</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/csce445">
                                <Nav.Link>CSCE 445</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}