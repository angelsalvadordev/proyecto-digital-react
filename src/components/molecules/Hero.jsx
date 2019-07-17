import React, { Component } from 'react'

class Hero extends Component {
    render() {
        return (
            <div>
                <h1 className="f-pattaya fz-40">Bienvenidos</h1>
                <p className="f-poppins f-14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>
                <div className="hero-buttons">
                    <a href="#">Portafolio</a>
                    <a href="#">Contactanos</a>
                </div>
            </div>
        )
    }
}

export default Hero
