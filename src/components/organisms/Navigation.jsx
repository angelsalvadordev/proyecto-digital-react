import React, { Component } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';

class Navigation extends Component {

    componentDidMount() {
        const menuBurger = document.getElementById('menu-burger')
        const mainMenu = document.getElementById('main-menu')
        const mainNavigation = document.getElementById('main-navigation')
        menuBurger.addEventListener('click', () => {
            mainNavigation.classList.toggle('bg-dark')
            mainMenu.classList.toggle('show-menu')
        })
    }

    render() {
        return (
            <div className="main-navigation flex align-items-center" id="main-navigation">
                <Logo />
                <Menu />
                <Burger />
            </div>
        )
    }
}

export default Navigation