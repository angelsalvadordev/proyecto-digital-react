import React from 'react'
import Button from '../atoms/Button';
import IntroSection from '../molecules/IntroSection'

const Hero = () => {
    return (
        <div className="main-hero flex flex-column align-items-center">
            <IntroSection
                size="h1"
                title="Bienvenido"
                className="f-light"
                parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"

            />

            <div className="hero-buttons flex">
                <Button link="#portafolio" className="btn-hero btn-primary bg-secondary" name="portafolio" />
                <Button link="#contacto" className="btn-hero btn-secondary" name="contactanos" />
            </div>
        </div>
    )
}

export default Hero
