import React, { Component } from 'react'
import instagramLogo from '../../svg/instagram.svg'
import twitterLogo from '../../svg/twitter.svg'
import facebookLogo from '../../svg/facebook.svg'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className="main-navigation flex align-items-center">
                <a href="#" className="f-pattaya f-35 f-light flex flex-column">Proyecto<span className="f-20">digital</span></a>
                <div className="main-menu bg-dark flex flex-column">
                    <div className="social flex justify-content-center">
                        <a href="/"><img src={instagramLogo} className="social__icon" alt="icono instagram" /></a>
                        <a href="/"><img src={twitterLogo} className="social__icon" alt="icono twitter" /></a>
                        <a href="/"><img src={facebookLogo} className="social__icon" alt="icono facebook" /></a>
                    </div>
                    <ul className="menu">
                        <li className="menu__item"><a href="#inicio" className="menu__link f-14">Inicio</a></li>
                        <li className="menu__item"><a href="#servicios" className="menu__link f-14">Servicios</a></li>
                        <li className="menu__item"><a href="#portafolio" className="menu__link f-14">Portafolio</a></li>
                        <li className="menu__item"><a href="#testimonios" className="menu__link f-14">Testimonios</a></li>
                        <li className="menu__item"><a href="#contactos" className="menu__link f-14">Contacto</a></li>
                    </ul>
                </div>
                <a href="#" className="burger f-icon f-30 outline">menu</a>
            </div>
        )
    }
}

export default Navigation