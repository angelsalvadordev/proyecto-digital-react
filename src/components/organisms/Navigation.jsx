import React, { useState, useEffect } from 'react'
import Logo from '../atoms/Logo';
import Burger from '../atoms/Burger';
import Menu from '../molecules/Menu';
import withAutoScroll from '../../hocs/withAutoScroll'

const Navigation = ({ autoScroll }) => {
    // Hooks
    const [mobileMenu, setMobileMenu] = useState(false)
    const [fixed, setFixed] = useState(false)

    const handleFixed = () => {
        let navFixed
        window.scrollY > 0 ? navFixed = true : navFixed = false
        setFixed(navFixed)
    }

    const handleMenu = e => {
        e.preventDefault()
        const showMenu = mobileMenu ? false : true
        setMobileMenu(showMenu)
    }

    const autoScrollSection = e => {
        // prop autoScroll es parte del HOC withAutoScroll
        autoScroll(e)

        setMobileMenu(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', () => {
            handleFixed()
        })
    }, [])

    return (
        <div className={`main-navigation ${mobileMenu ? 'navigation-dark' : ''} ${fixed ? 'navigation-fixed' : null}`}>
            <div className="main-navigation__content flex align-items-center">
                <Logo fixed={fixed} />
                <Menu autoScrollSection={autoScrollSection} showMobileMenu={mobileMenu} />
                <Burger handleMenu={handleMenu} />
            </div>
        </div>
    )
}

export default withAutoScroll(Navigation)