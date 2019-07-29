import React, { Component } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';

const Navigation = props => {
    return (

        <div className={`main-navigation ${props.showMenu ? 'navigation-color' : ''} ${props.navigationFixed ? 'navigation-fixed' : ''}`}>
            <div className="main-navigation__content flex align-items-center">
                <Logo autoScroll={props.autoScroll} resize={props.navigationFixed} />
                <Menu showMenu={props.showMenu} autoScroll={props.autoScroll} />
                <Burger onclick={props.showMenuBurger} />
            </div>
        </div>
    )

}

export default Navigation