import React, { Component } from 'react'
import Navigation from '../molecules/Navigation';
import Hero from '../molecules/Hero';

class NavHero extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Hero />
            </div>
        )
    }
}

export default NavHero
