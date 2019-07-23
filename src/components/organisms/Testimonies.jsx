import React from 'react'
import IntroSection from '../molecules/IntroSection';
import CardTestimony from '../molecules/CardTestimony'
import NavTestimonies from '../molecules/NavTestimonies'
const Testimonies = () => {
    return (
        <div className="testimonies">
            <div className="header-testimonies">
                <IntroSection
                    title="Testimonios"
                    id="testimonios"
                    className="f-light"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit" />
            </div>
            <div className="carousel-testimonies" id="show-carousel">
                <div className="cards-container" id="items-container">
                    <CardTestimony
                        image="/media/images/descarga.jpg"
                    />
                    <CardTestimony
                        image="/media/images/descarga.jpg"
                    />
                    <CardTestimony
                        image="/media/images/descarga.jpg"
                    />
                    <CardTestimony
                        image="/media/images/descarga.jpg"
                    />
                    <CardTestimony
                        image="/media/images/descarga.jpg"
                    />
                </div>
            </div>
            <NavTestimonies />
        </div>
    )
}

export default Testimonies
