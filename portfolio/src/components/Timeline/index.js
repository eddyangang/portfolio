import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import TimelineItems from "../timelineItems/index"
import API from "../../utils/API"
export default function Timeline() {
    
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProjects()
        .then(data => {
            console.log(data);
            if (!data) console.log("no data return");
            else{
                setProjects(data.data)
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <section className="cd-timeline js-cd-timeline">
            <div className="container max-width-lg cd-timeline__container">
            { Projects.length ? (Projects.map( (project, i) => (
                <TimelineItems props={{...project, i}} key={i}/>
            ))) : (<Spinner animation="border" />)}
           </div>
        </section>
    )
}
