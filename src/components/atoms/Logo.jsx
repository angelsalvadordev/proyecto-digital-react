import React from 'react'
import withAutoScroll from '../../hocs/withAutoScroll'

const Logo = props => {
    return (
        <a
            href="#inicio"
            onClick={props.autoScroll} // autoScroll desde withAutoScroll
            className={`main-logo f-pattaya f-30 f-light flex flex-column ${props.fixed ? 'logo-resize' : ''}`}>
            Proyecto
            <span
                href="#inicio"
                onClick={props.autoScroll}
                className="f-16"
            >digital
            </span>
        </a>
    )
}

export default withAutoScroll(Logo)
