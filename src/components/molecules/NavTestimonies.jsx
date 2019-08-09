import React from 'react'
const NavTestimonies = () => {
    // Libreria Glide requiere data-glide-el y data-glide-dir para la navegacion
    return (
        <div className="glide__bullets testimonies-bullets flex" data-glide-el="controls[nav]">
            <span className="testimonies-bullets__button bg-light" data-glide-dir="=0"></span>
            <span className="testimonies-bullets__button bg-light" data-glide-dir="=1"></span>
            <span className="testimonies-bullets__button bg-light" data-glide-dir="=2"></span>
            <span className="testimonies-bullets__button bg-light" data-glide-dir="=3"></span>
            <span className="testimonies-bullets__button bg-light" data-glide-dir="=4"></span>
        </div>
    )
}

export default NavTestimonies
