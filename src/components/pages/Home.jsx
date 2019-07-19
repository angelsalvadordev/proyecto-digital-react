import React, { Component } from 'react'
import Navigation from '../organisms/Navigation'
import Hero from '../organisms/Hero';
import Services from '../organisms/Services'
import Testimonies from '../organisms/Testimonies'
import Portfolio from '../organisms/Portfolio';

class Home extends Component {
    render() {
        return (
            <>
                <header className="container main-header">
                    <div className="section">
                        <Navigation />
                        <Hero />
                    </div>
                </header>
                <main className="container main-content">
                    <section className="section main-services">
                        <Services />
                    </section>
                    <section className="section main-testimonies bg-primary">
                        <Testimonies />
                    </section>
                    <section className="section main-portfolio">
                        <Portfolio />
                    </section>
                </main>
                <footer className="container">
                    <section className="section main-footer">

                    </section>
                </footer>
            </>
        )
    }
}

export default Home
