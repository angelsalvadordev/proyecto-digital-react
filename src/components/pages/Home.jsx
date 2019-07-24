import React, { Component } from 'react'
import Navigation from '../organisms/Navigation'
import Hero from '../organisms/Hero';
import Services from '../organisms/Services'
import Testimonies from '../organisms/Testimonies'
import Portfolio from '../organisms/Portfolio';
import Contact from '../organisms/Contact'

class Home extends Component {
    render() {
        return (
            <>
                <header className="container container-header" id="inicio">
                    <div className="section main-header">
                        <Navigation />
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
