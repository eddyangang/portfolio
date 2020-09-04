import React from 'react'
import Carousel from "../components/Carousel"
import Jumbotron from "../components/Jumbotron"
import Timeline from "../components/Timeline"
import AboutMe from "../components/AboutMe"
export default function Home() {
    return (
        <>
        <Carousel/>
        <Jumbotron/>
        <AboutMe/>
        <Timeline/>
        </>
    )
}
