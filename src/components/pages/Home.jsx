import React, { Component } from 'react'
import Navigation from '../organisms/Navigation'
import Hero from '../organisms/Hero';
import Services from '../organisms/Services'
import Testimonies from '../organisms/Testimonies'
import Portfolio from '../organisms/Portfolio';
import Contact from '../organisms/Contact'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
            navigationFixed: false,
        }
    }

    // Para mostrar el menu cuando esta en version movil
    showMenuBurger = e => {
        e.preventDefault()
        let validateMenu
        this.state.showMenu ? (validateMenu = false) : (validateMenu = true)
        this.setState({
            showMenu: validateMenu
        })
    }
    // Al hacer scroll manual, el menu se vuelve fixed y se coloca de un color distinto
    navigationFixed = scroll => {
        let validateNavigation
        scroll > 0 ? validateNavigation = true : validateNavigation = false

        this.setState({
            navigationFixed: validateNavigation
        })
    }

    // Para navegacion automatica si hace click en algun item del menu
    autoScroll = e => {
        e.preventDefault()
        let href = e.target.getAttribute('href')
        let section = document.querySelector(href)
        console.log(section)
        let navSize, rangeScroll
        //Primera comprobacion para saber si el usuario se encuentra en el inicio y a la vez
        // la seccion a la que quiere ir automaticamente, es mayor a 0.
        if (window.scrollY === 0 && section.offsetTop > 0) {
            // Fuerza a que la navegacion tome la verdadera altura al hacer scroll y asi poder
            // calcular el tamaño del cambio para evitar afectar el scroll automatico
            window.scroll({ top: 1 })
        }

        if (section.offsetTop > 0 || href === '#inicio') {
            this.setState({ showMenu: false })
            // setTimeOut es necesario para capturar el cambio de tamaño de la navegacion
            // ya que version laptop en adelante, la navegacion tiene un tamaño distinto.
            // Por lo tanto al hacer scroll, la navegacion cambia de tamaño en una animacion de 200ms y es necesario 
            // capturar ese nuevo valor para que no afecte el scroll automatico. Por lo tanto setTimeOut esta en 200ms
            setTimeout(() => {
                //Nueva captura del alto de la navegacion
                navSize = document.querySelector('.main-navigation').offsetHeight
                // Calculo del desplazamiento a la seccion restado con el tamaño de la navegacion para evitar tapar el titulo
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
            <>
                <header className="container container-header" id="inicio">
                    <Navigation
                        showMenu={this.state.showMenu}
                        showMenuBurger={this.showMenuBurger}
                        navigationFixed={this.state.navigationFixed}
                        autoScroll={this.autoScroll}
                    />
                    <div className="section main-header">
                        <Hero autoScroll={this.autoScroll} />
                    </div>
                </header>
                <main className="container container-main">
                    <section className="section main-services">
                        <Services />
                    </section>
                    <section className="section main-testimonies">
                        <Testimonies />
                    </section>
                    <section className="section main-portfolio">
                        <Portfolio />
                    </section>
                </main>
                <footer className="container container-footer">
                    <section className="section main-footer">
                        <Contact />
                    </section>
                </footer>
            </>
        )
    }
}

export default Home
