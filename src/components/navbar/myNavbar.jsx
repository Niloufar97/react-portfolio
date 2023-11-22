import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navigation() {
    const expand = "md";
    return (
        <>
            <Navbar key={expand} expand={expand} className="myNav mb-3">
              <Container>
                <Navbar.Brand href="#">Niloufar</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink to='/' className='nav-link'>Home</NavLink>
                      <NavLink to='/about' className='nav-link'>About</NavLink>
                      <NavLink to='/projects' className='nav-link'>Projects</NavLink>  
                    </Nav>           
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
        </>
      );
}

export default Navigation
