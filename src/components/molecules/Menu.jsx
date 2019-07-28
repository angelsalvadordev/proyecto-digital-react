import React from 'react'
import SocialButton from '../atoms/SocialButton'

class Menu extends React.Component {

    componentDidMount() {
        const getElements = menu => {
            const menuNav = document.getElementById(menu)
            const buttonsNav = menuNav.querySelectorAll('a[href^="#"]')

            buttonsEventClick(buttonsNav)
        }


        const buttonsEventClick = (elements) => {
            elements.forEach(el => {
                el.addEventListener('click', e => {
                    e.preventDefault()
                    const mainNavigation = document.getElementById('main-navigation')
                    let mainNavigationHeight = mainNavigation.getBoundingClientRect().height
                    console.log(mainNavigationHeight)
                    const attribute = e.target.getAttribute('href')
                    const sectionPos = document.querySelector(attribute).offsetTop - 73
                    console.log(sectionPos)
                    animateScroll(sectionPos)
                })
            })
        }

        const animateScroll = sectionPos => {
            window.scroll({
                top: sectionPos,
                left: 0,
                behavior: 'smooth'
            })
        }

        const runScroll = menu => {
            getElements(menu)
        }

        runScroll('menu')
    }

    render() {
        return (
            <div className="main-menu bg-dark flex-column justify-content-center" id="main-menu">
                <div className="social flex">
                    <SocialButton name="instagram" />
                    <SocialButton name="twitter" />
                    <SocialButton name="facebook" />
                </div>
                <ul className="menu" id="menu">
                    <li className="menu__item"><a href="#inicio" className="menu__link f-14">Inicio</a></li>
                    <li className="menu__item"><a href="#servicios" className="menu__link f-14">Servicios</a></li>
                    <li className="menu__item"><a href="#portafolio" className="menu__link f-14">Portafolio</a></li>
                    <li className="menu__item"><a href="#testimonios" className="menu__link f-14">Testimonios</a></li>
                    <li className="menu__item"><a href="#contacto" className="menu__link f-14">Contacto</a></li>
                </ul>
            </div>
        )
    }

}

export default Menu
