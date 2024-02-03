import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../Assets/logo1.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";



function NavBar() {
  const [toggle, SetToggle] = useState(false);

  const ToggleClick = () => {
    SetToggle(!toggle);
  };
  return (
    <Navbar variant="light" expand="md" className="NavBar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="60"
            className="d-inline-block align-top ps-3"
            alt="Logo"
          />
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="basic-navbar-nav"
          aria-expanded={toggle}
          aria-label="Toogle The NavBar"
          onClick={ToggleClick}
        >
          <span> {toggle ? <MdClose /> : <FaBars />}</span>
        </button>

        <Navbar.Collapse id="basic-navbar-nav" className={toggle ? "show" : ""}>
         
          <Nav className="ms-auto ">
            <Nav className="mx-2">
              <NavLink
                className="text-dark text-bold  my-auto FrontNavBarItem"
                to={"/Contact"}
              >
                {" "}
                Contact-Us
              </NavLink>
            </Nav>
            <Nav className="mx-2">
              <NavLink
                className="text-dark text-bold  my-auto FrontNavBarItem"
                to={"/About"}
              >
                {" "}
                About-Us
              </NavLink>
            </Nav>
            <Nav className="mx-2"> 
              <Nav.Link
                className="text-dark text-bold  my-auto FrontNavBarItem"
                href="/admin/login"
              >
                 Login
              </Nav.Link>

              
            </Nav>
            <Button>Get a Quate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
