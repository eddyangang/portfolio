import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./style.css"
import Contact from "../ContactModal"


export default function myNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Eddy Yang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Contact/>
            <Nav.Link href="https://github.com/eddyangang?tab=repositories" target="_blank">
            <i className="fa fa-github-square"></i>
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/eddy-yang-213b43189/" target="_blank">
            <i className="fa fa-linkedin-square"></i>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/eddyangang" target="_blank">
            <i className="fa fa-facebook-square"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
