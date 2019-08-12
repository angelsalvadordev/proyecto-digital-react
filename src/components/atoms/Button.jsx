import React from 'react'
import PropTypes from 'prop-types'
import withAutoScroll from '../../hocs/withAutoScroll';


const Button = props => (
    <a
        href={props.link ? props.link : { undefined }}
        onClick={props.autoScroll} // Autoscroll desde withAutoScroll
        className={`btn ${props.className}`}
    >{props.name}</a >
)

Button.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default withAutoScroll(Button)

