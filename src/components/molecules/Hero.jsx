import React, { Component } from 'react'
import './Hero.css'
class Hero extends Component {
    render() {
        return (
            <div className="main-hero flex flex-column align-items-center">
                <h1 className="f-pattaya f-40 f-light hero-title">Bienvenido</h1>
                <p className="f-poppins f-14 f-light hero-parag">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>
                <div className="hero-buttons flex">
                    <a href="#" className="btn bg-secondary">Portafolio</a>
                    <a href="#" className="btn btn-alt">Contactanos</a>
                </div>
            </div>
        )
    }
}

export default Hero
