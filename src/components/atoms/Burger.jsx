import React from 'react'

//showMenu viene del componente organisms/Navigation
const Burger = ({ handleMenu }) => {
    return (
        <a href={undefined} onClick={handleMenu} className="menu-burger f-icon f-30" id="menu-burger">menu</a>
    )
}

export default Burger
