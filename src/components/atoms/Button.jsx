import React from 'react'
import './Button.css'

const Button = props => {
    return (
        <a href={props.link} className={`btn ${props.className}`}>{props.name}</a>
    )
}

export default Button
