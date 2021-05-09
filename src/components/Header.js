import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
                <Container>
                    <LinkContainer to="/" >
                        <Navbar.Brand>Rajvansh Hospital</Navbar.Brand>
                    </LinkContainer>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/addpatients">
                                <Nav.Link><i className="fas fa-user-plus"></i> Add Patient</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link><i class="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/settings">
                                <Nav.Link><i className="fas fa-cog"></i> Settings</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
