import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./style.css"
export default function index() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"./img/sf_banner.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.amazon.jobs/teams/421/images/Jobs2grads.jpg?1546890341"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"./img/code.jpg"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}
