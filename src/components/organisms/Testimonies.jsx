import React from 'react'
import IntroSection from '../molecules/IntroSection';
import CardTestimony from '../molecules/CardTestimony'
import NavTestimonies from '../molecules/NavTestimonies'
const Testimonies = () => {
    return (
        <>
            <IntroSection
                title="Testimonios"
                id="testimonios"
                className="f-light"
                parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit" />
            <div className="cards-testimonies">
                <CardTestimony />
            </div>
            <NavTestimonies />
        </>
    )
}

export default Testimonies
