import React from 'react'

//showMenuBurger viene del componente organisms/Navigation
const Burger = ({ showMenuBurger }) => {
    return (
        <a onClick={showMenuBurger} href="#" className="menu-burger f-icon f-30" id="menu-burger">menu</a>
    )
}

export default Burger
