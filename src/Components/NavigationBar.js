import {Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.scss';



function NavigationBar(){
    return(
        <Navbar style={{backgroundColor:'#171717',}} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>AFR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <LinkContainer exact to="/">
                            <Nav.Link className="nav-link">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/resume">
                            <Nav.Link className="nav-link">Resume </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link className="nav-link">Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;