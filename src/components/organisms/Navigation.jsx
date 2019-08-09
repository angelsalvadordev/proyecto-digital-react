import React, { useState } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';
import withAutoScroll from '../../hocs/withAutoScroll'

const Navigation = props => {

    const [menu, setMenu] = useState(false) // Usando hooks

    // Para mostrar u ocultar el menu en version movil
    const showMenuBurger = e => {
        e.preventDefault()
        const showMenu = menu ? false : true
        setMenu(showMenu)
    }

    // Para usar el autoScroll en los items del menu y ocultar el menu en moviles.
    const selectElementMenu = e => {
        // prop autoScroll es parte del HOC withAutoScroll
        props.autoScroll(e)

        //Ocultar menu movil
        setMenu(false)
    }

    return (
        <div className={`main-navigation ${menu ? 'navigation-dark' : ''} ${props.navigationFixed ? 'navigation-fixed' : ''}`}>
            <div className="main-navigation__content flex align-items-center">
                <Logo resize={props.navigationFixed} />
                <Menu autoScroll={selectElementMenu} showMenu={menu} />
                <Burger showMenuBurger={showMenuBurger} />
            </div>
        </div>
    )
}

export default withAutoScroll(Navigation)