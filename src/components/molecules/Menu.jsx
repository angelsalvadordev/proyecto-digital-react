import React from 'react'
import SocialButton from '../atoms/SocialButton'

const Menu = props => {
    return (
        <div className={`main-menu bg-dark flex-column justify-content-center ${props.showMenu ? 'show-menu' : ''}`}>
            <div className="social flex">
                <SocialButton name="instagram" />
                <SocialButton name="twitter" />
                <SocialButton name="facebook" />
            </div>
            <ul className="menu">
                <li className="menu__item"><a href="#inicio" onClick={props.autoScroll} className="menu__link f-14">Inicio</a></li>
                <li className="menu__item"><a href="#servicios" onClick={props.autoScroll} className="menu__link f-14">Servicios</a></li>
                <li className="menu__item"><a href="#portafolio" onClick={props.autoScroll} className="menu__link f-14">Portafolio</a></li>
                <li className="menu__item"><a href="#testimonios" onClick={props.autoScroll} className="menu__link f-14">Testimonios</a></li>
                <li className="menu__item"><a href="#contacto" onClick={props.autoScroll} className="menu__link f-14">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Menu
