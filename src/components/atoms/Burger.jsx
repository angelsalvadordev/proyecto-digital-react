import React from 'react'

const Burger = React.forwardRef((props, ref) => {
    return (
        <a ref={ref} onClick={props.onclick} href="#" className="menu-burger f-icon f-30" id="menu-burger">menu</a>
    )
})

export default Burger
