import React, { Component } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            navigationFixed: false,
        }
    }

    showMenuBurger = e => {
        e.preventDefault()
        let validateMenu
        this.state.showMenu ? (validateMenu = false) : (validateMenu = true)
        this.setState({
            showMenu: validateMenu
        })
    }

    navigationFixed = scroll => {
        let validateNavigation
        scroll > 0 ? validateNavigation = true : validateNavigation = false

        this.setState({
            navigationFixed: validateNavigation
        })
    }

    autoScroll = e => {
        e.preventDefault()
        let href = e.target.getAttribute('href')
        let section = document.querySelector(href)
        let navSize, rangeScroll
        if (window.scrollY === 0 && section.offsetTop > 0) {
            window.scroll({ top: 1 })
        }

        if (section.offsetTop > 0 || href === '#inicio') {
            this.setState({ showMenu: false })
            setTimeout(() => {
                navSize = document.querySelector('.main-navigation').offsetHeight
                rangeScroll = section.offsetTop - navSize
                window.scroll({
                    top: rangeScroll,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 200);
        }
    }

    componentDidMount() {
        let scrollCount
        document.addEventListener('scroll', () => {
            scrollCount = window.scrollY
            this.navigationFixed(scrollCount)
        })
    }

    render() {
        return (
            <div className={`main-navigation ${this.state.showMenu ? 'navigation-color' : ''} ${this.state.navigationFixed ? 'navigation-fixed' : ''}`}>
                <div className="main-navigation__content flex align-items-center">
                    <Logo resize={this.state.navigationFixed} />
                    <Menu showMenu={this.state.showMenu} autoScroll={this.autoScroll} />
                    <Burger onclick={this.showMenuBurger} />
                </div>
            </div>
        )
    }
}

export default Navigation