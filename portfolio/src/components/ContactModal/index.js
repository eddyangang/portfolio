import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Nav from 'react-bootstrap/Nav'
import ContactForm from "../ContactForm"

export default function Contact() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Nav.Link onClick={handleShow}>
          <i className="fa fa-envelope-square"></i>
        </Nav.Link>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm/>
          </Modal.Body>

        </Modal>
      </>
    );
  }
  