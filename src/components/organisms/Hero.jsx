import React from 'react'
import './Hero.css'
import IntroSection from '../molecules/IntroSection'
import Button from '../atoms/Button';

const Hero = () => {
    return (
        <div className="main-hero flex flex-column align-items-center">
            <IntroSection title="Bienvenido" className="f-light" parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit " />

            <div className="hero-buttons flex">
                <Button link="#" className="btn-primary bg-secondary" name="portafolio" />
                <Button link="#" className="btn-secondary" name="contactanos" />
            </div>
        </div>
    )
}

export default Hero
