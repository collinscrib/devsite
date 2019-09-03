import React, { Component } from 'react';

import './Navigator.css';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigator extends Component {
    render() {
        return (
            <div id="navigator">
                <Navbar variant="dark" expand="lg" fixed="top">
                    <LinkContainer to="/"><Navbar.Brand>Collin Scribner</Navbar.Brand></LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav pullLeft variant="pills">
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/professional">
                                <Nav.Link>Professional</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/portfolio">
                                <Nav.Link>Portfolio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/service">
                                <Nav.Link>Service</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}