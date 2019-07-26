import React from 'react'

const SocialButton = props => {
    return (
        <a href="/">
            <img src={`/images/svg/${props.name}.svg`} alt={`icono ${props.name}`} />
            <span>{props.name}</span>
        </a>
    )
}

export default SocialButton
