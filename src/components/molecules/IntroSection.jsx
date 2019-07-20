import React from 'react'

// Need props title, className and parag
const IntroSection = props => {
    return (
        <div className="intro-section">
            {props.size === "h1"
                ? <h1 id={props.id} className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h1>
                : <h2 id={props.id} className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h2>
            }
            <p className={`f-poppins-r f-14 f-tertiary intro-section__parag ${props.className}`}>{props.parag}</p>
        </div>
    )
}

export default IntroSection