import React from 'react'
import PropTypes from 'prop-types'
import SocialButton from '../atoms/SocialButton'

const Menu = ({ showMobileMenu, autoScrollSection }) => {
    return (
        <div className={`main-menu bg-dark flex-column justify-content-center ${showMobileMenu ? 'show-menu' : ''}`}>
            <div className="social flex">
                <SocialButton name="instagram" />
                <SocialButton name="twitter" />
                <SocialButton name="facebook" />
            </div>
            <ul className="menu">
                <li className="menu__item"><a href="#inicio" onClick={autoScrollSection} className="menu__link f-14">Inicio</a></li>
                <li className="menu__item"><a href="#servicios" onClick={autoScrollSection} className="menu__link f-14">Servicios</a></li>
                <li className="menu__item"><a href="#testimonios" onClick={autoScrollSection} className="menu__link f-14">Testimonios</a></li>
                <li className="menu__item"><a href="#portafolio" onClick={autoScrollSection} className="menu__link f-14">Portafolio</a></li>
                <li className="menu__item"><a href="#contacto" onClick={autoScrollSection} className="menu__link f-14">Contacto</a></li>
            </ul>
        </div>
    )
}

Menu.propTypes = {
    showMobileMenu: PropTypes.bool.isRequired,
    autoScrollSection: PropTypes.func.isRequired
}

export default Menu
