import React from 'react'
import PropTypes from 'prop-types'

const Service = props => {

    return (
        <div className={`service ${props.className}`}>
            <img className="service__image" src={props.image} alt={props.name} />
            <h3 className="f-30 f-pattaya service__title">{props.name}</h3>
            <p className="f-14 service__parag">{props.parag}</p>
            <span className="border-service bg-primary"></span>
        </div>
    )
}

Service.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string,
    parag: PropTypes.string
}

Service.defaultProps = {
    name: "Default Service",
    parag: "Default Paragraph"
}

export default Service
