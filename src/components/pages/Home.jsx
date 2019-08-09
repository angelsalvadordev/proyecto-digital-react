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
            navigationFixed: false,
        }
    }

    // Al hacer scroll manual, el menu se vuelve fixed y se coloca de un color distinto
    navigationFixed = () => {
        let navigationFixed
        window.scrollY > 0 ? navigationFixed = true : navigationFixed = false

        this.setState({
            navigationFixed
        })
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            this.navigationFixed()
        })
    }

    render() {
        return (
            <>
                <header className="container container-header" id="inicio">
                    <Navigation
                        navigationFixed={this.state.navigationFixed}
                    />
                    <div className="section main-header">
                        <Hero />
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
