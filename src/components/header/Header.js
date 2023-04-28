
import React from 'react';
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import './header.css';
import  User  from '../../SignUp/User';
import Dropdown from 'react-bootstrap/Dropdown';

export const Header = ({isLoggedIn }) => {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null; // Don't render the navbar on the login page
  }
  if (location.pathname === "/register") {
    return null; // Don't render the navbar on the login page
  }
  if (location.pathname === "/logout") {
    return null; // Don't render the navbar on the login page
  }
  if (location.pathname === "/MoviePlaybackScreen/:id") {
    return null; // Don't render the navbar on the login page
  }
  if (location.pathname.startsWith('/MoviePlaybackScreen/')) {
    return null; // Don't render the header on the playback screen page
  }

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src="images/mascot.png" />
              LearnME
            </Navbar.Brand>
            {isLoggedIn && <span>You are in Premium</span>}

            <Navbar.Collapse id="basic-navbar-nav" />
         

          

              <Dropdown>
         


                <Dropdown.Toggle variant="success">
                  Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/AboutScreen">
                      <i className="fas fa-user"></i>About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/ProductScreen">
              <i className="fas fa-user"></i>Product
            </Nav.Link>
                    {/* <Nav.Link as={Link} to="/ProfileScreen">
                      <i className="fas fa-user"></i>Profile
                    </Nav.Link> */}
                  </Nav>
                </Dropdown.Menu>
              </Dropdown>

          
            <User />
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header;