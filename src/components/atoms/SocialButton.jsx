import React from 'react'
import PropTypes from 'prop-types'

const SocialButton = props => {
    return (
        <a href="javascript:void(0)">
            <img src={`/images/svg/${props.name}.svg`} alt={`icono ${props.name}`} />
            <span>{props.name}</span>
        </a>
    )
}

SocialButton.propTypes = {
    // Se necesita el nombre de una red social.
    name: PropTypes.string.isRequired
}

export default SocialButton
