import React from 'react'
import ConvertDate from "../../utils/convertDate"
export default function timelineItems({props}) {

    const date = ConvertDate(props.date)
    console.log(date);
    return (
        <div className="cd-timeline__block">
            <div className="cd-timeline__img cd-timeline__img--location">
                <img src={props.image_icon} alt={props.title}/>
            </div>
            <div className="cd-timeline__content text-component">
            <h2>{props.title}</h2>
                <img src={props.image_path} alt={props.summary}/>
                <p className="my-2">
                    <button className="btn btn-info mr-2" type="button" data-toggle="collapse" data-target={"#collaspe" + props.i}>Read more</button>
                    {props.deployed_url ? (<a href={props.deployed_url} className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer">Deployed Site</a>) : null}
                    {props.github_url ? (<a href={props.github_url} className="btn btn-secondary m-2" target="_blank" rel="noopener noreferrer">Github</a>) : null}
                </p>
                <div className="collapse" id={"collaspe" + props.i}>
                    <div className="card card-body">{props.summary}</div>
                </div>

                <div className="flex items-center"><span className="cd-timeline__date">{date}</span></div>

   
            </div>
        </div>
    )
}

