import React from 'react'
import PropTypes from 'prop-types'
import withAutoScroll from '../../hocs/withAutoScroll';

// el hoc withAutoScroll implementa la prop autoScroll
// Props a usarse:  name, className y link
const Button = props => (
    <a
        href={props.link ? props.link : "javascript:void(0)"}
        onClick={props.autoScroll}
        className={`btn ${props.className}`}
    >{props.name}</a >
)

// Se requiere un nombre y una clase
Button.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    link: PropTypes.string
}

// Button.defaultProps = {
//     name: "default button",
//     className: "f-light bg-primary",
//     link: "",
// }

export default withAutoScroll(Button)

