import React, { Component } from 'react'
import './styles.css'
import NavHero from '../organisms/NavHero';

class Home extends Component {
    render() {
        return (
            <>
                <header className="container main-header">
                    <div className="section">
                        <NavHero />
                    </div>
                </header>
                <main>

                </main>
                <footer>

                </footer>
            </>
        )
    }
}

export default Home
