import React from 'react'
import './Service.css'

// Need props: image, name and parag
const Service = props => {

    return (
        <div className="service">
            <img className="service__image" src={props.image} alt={props.name} />
            <h3 className="f-30 f-pattaya">{props.name}</h3>
            <p className="f-14 service__parag">{props.parag}</p>
            <span className="border-service bg-primary"></span>
        </div>
    )
}

export default Service
