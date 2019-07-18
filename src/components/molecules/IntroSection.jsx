import React from 'react'
import './IntroSection.css'

// Need props title, className and parag
const IntroSection = props => {
    return (
        <div className="intro-section">
            <h2 className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h2>
            <p className={`f-14 f-tertiary intro-section__parag ${props.className}`}>{props.parag}</p>
        </div>
    )
}

export default IntroSection
