import React from 'react'
import SocialButton from '../atoms/SocialButton'

const Menu = () => {
    return (
        <div className="main-menu bg-dark flex-column justify-content-center" id="main-menu">
            <div className="social flex">
                <SocialButton name="instagram" />
                <SocialButton name="twitter" />
                <SocialButton name="facebook" />
            </div>
            <ul className="menu">
                <li className="menu__item"><a href="#inicio" className="menu__link f-14">Inicio</a></li>
                <li className="menu__item"><a href="#servicios" className="menu__link f-14">Servicios</a></li>
                <li className="menu__item"><a href="#portafolio" className="menu__link f-14">Portafolio</a></li>
                <li className="menu__item"><a href="#testimonios" className="menu__link f-14">Testimonios</a></li>
                <li className="menu__item"><a href="#contactos" className="menu__link f-14">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Menu
