import React from 'react'
import "./style.css"
export default function index() {
    return (
    <>
    <div className="jumbotron text-center">
        <h1>Welcome to my Webpage! <span role="img" aria-label="cat emoji">😺</span></h1>
        <p>Hope you get to learn a little bit about me and my projects!</p>
        <a className="btn btn-primary text-white mx-1" data-toggle="collapse" href="#resume" role="button" aria-expanded="false"
          aria-controls="resume">
          View Resume
        </a>
        <a className="btn btn-secondary" download href="./img/Resume_July_2020.pdf"><i className="fa fa-download"></i> Resume</a>
      </div>
      <div className="collapse text-center" id="resume">
        <object data="./img/Resume_July_2020.pdf" type="application/pdf">Resume</object>
    </div>
    </>
    )
}
