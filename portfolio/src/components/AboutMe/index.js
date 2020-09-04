import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./style.css"
export default function AboutMe() {
    
    return (
    <Container className="my-2">
      <Row>
        <Col xs={6} md={4} >
          <div className="wrapper">
            <img src="./img/me2.jpg" alt="me"/>
            <img src="./img/me3.jpg" alt="me2" id="slide"/>
          </div>
        </Col>

        <Col xs={6} md={6}>
          <h1>About Me</h1>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quaerat enim fugit dignissimos perferendis laudantium ratione sapiente totam veritatis ipsa esse nisi, ab aliquid? Nihil, non. Nesciunt doloremque voluptates esse!</p>
        </Col>
      </Row>
    </Container>
    )
}
