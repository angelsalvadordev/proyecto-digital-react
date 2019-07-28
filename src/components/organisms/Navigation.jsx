import React, { Component } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';

class Navigation extends Component {


    componentDidMount() {
        const menuBurger = document.getElementById('menu-burger'),
            mainMenu = document.getElementById('main-menu'),
            mainNavigation = document.getElementById('main-navigation'),
            mainLogo = document.querySelector('.main-logo')

        menuBurger.addEventListener('click', e => {
            e.preventDefault()
            mainNavigation.classList.toggle('navigation-color')
            mainMenu.classList.toggle('show-menu')
        })

        document.addEventListener('scroll', e => {
            if (window.scrollY === 0) {
                return (
                    mainNavigation.classList.remove('navigation-fixed'),
                    mainLogo.classList.remove('logo-resize')
                )
            }
            mainNavigation.classList.add('navigation-fixed')
            mainLogo.classList.add('logo-resize')
        })
    }

    render() {
        return (
            <div className="block-navigation" id="block-navigation">
                <div className="main-navigation" id="main-navigation">
                    <div className="main-navigation__content flex align-items-center">
                        <Logo />
                        <Menu />
                        <Burger />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation