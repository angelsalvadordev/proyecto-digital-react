import React from 'react'
import PropTypes from 'prop-types'

const SocialButton = props => {
    return (
        <a href={undefined}>
            <img src={`/images/svg/${props.name}.svg`} alt={`icono ${props.name}`} />
            <span>{props.name}</span>
        </a>
    )
}

SocialButton.propTypes = {
    name: PropTypes.string.isRequired
}

export default SocialButton
