import React from 'react'
import PropTypes from 'prop-types'

// Prop obligatoria "size"
const IntroSection = props => {

    const sizeTitle = () => {
        switch (props.size) {
            case 'h1':
                return <h1 id={props.id} className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h1>
            case 'h2':
                return <h2 id={props.id} className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h2>
            case 'h3':
                return <h3 id={props.id} className={`f-pattaya f-40 intro-section__title ${props.className}`}>{props.title}</h3>
            default:
                return <span className='f-pattaya f-40 intro-section__title'>{props.title}</span>
        }
    }
    return (
        <div className="intro-section">
            {sizeTitle()}
            <p className={`f-poppins-r f-14 f-tertiary intro-section__parag ${props.className}`}>{props.parag}</p>
        </div>
    )
}

IntroSection.propTypes = {
    size: PropTypes.string.isRequired, // Escoger entre h1 o h2
    id: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string
}

IntroSection.defaultProps = {
    className: '',
    title: 'Default title'
}

export default IntroSection