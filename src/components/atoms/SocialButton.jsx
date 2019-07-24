import React from 'react'

const SocialButton = props => {
    return (
        <a href="/">
            <img src={`/media/svg/${props.name}.svg`} alt={`icono ${props.name}`} />
            <span>{props.name}</span>
        </a>
    )
}

export default SocialButton
