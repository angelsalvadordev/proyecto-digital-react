import React from 'react'
import PropTypes from 'prop-types'
import SocialButton from '../atoms/SocialButton'

//Prop autoScroll viene del componente organisms/Navigation
const Menu = ({ showMenu, autoScroll }) => {
    return (
        <div className={`main-menu bg-dark flex-column justify-content-center ${showMenu ? 'show-menu' : ''}`}>
            <div className="social flex">
                <SocialButton name="instagram" />
                <SocialButton name="twitter" />
                <SocialButton name="facebook" />
            </div>
            <ul className="menu">
                <li className="menu__item"><a href="#inicio" onClick={autoScroll} className="menu__link f-14">Inicio</a></li>
                <li className="menu__item"><a href="#servicios" onClick={autoScroll} className="menu__link f-14">Servicios</a></li>
                <li className="menu__item"><a href="#testimonios" onClick={autoScroll} className="menu__link f-14">Testimonios</a></li>
                <li className="menu__item"><a href="#portafolio" onClick={autoScroll} className="menu__link f-14">Portafolio</a></li>
                <li className="menu__item"><a href="#contacto" onClick={autoScroll} className="menu__link f-14">Contacto</a></li>
            </ul>
        </div>
    )
}

Menu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    autoScroll: PropTypes.func.isRequired
}

export default Menu
