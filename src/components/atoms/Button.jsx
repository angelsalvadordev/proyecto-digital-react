import React from 'react'

// Need props name, className and link
const Button = props => {
    return (
        <a href={props.link} className={`btn ${props.className}`}>{props.name}</a>
    )
}

export default Button
