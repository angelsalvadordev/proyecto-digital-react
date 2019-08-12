import React from 'react'
import IntroSection from '../molecules/IntroSection';
import CardTestimony from '../molecules/CardTestimony'
import NavTestimonies from '../molecules/NavTestimonies'
import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide from '@glidejs/glide'

class Testimonies extends React.Component {
    componentDidMount() {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 2,
            perView: 3,
            focusAt: 'center',
            gap: 44,
            hoverpause: true,
            autoplay: 5000,
            breakpoints: {
                767: {
                    perView: 1,
                    gap: 0,
                    focusAt: 'center',
                },
                1023: {
                    startAt: 2,
                    perView: 2,
                    focusAt: 'center',
                    gap: 40
                },
                1439: {
                    perView: 2,
                    gap: 40,
                    focusAt: 'center'
                },
                1599: {
                    focusAt: 0,
                    perView: 2,
                }
            }
        }).mount()
    }

    render() {
        return (
            <div className="testimonies">
                <div className="header-testimonies">
                    <IntroSection
                        size="h2"
                        title="Testimonios"
                        id="testimonios"
                        className="f-light"
                        parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia" />
                </div>
                {/* Libreria Glide requiere data-glide-el*/}
                <div className="glide carousel-testimonies">
                    <div className="glide__track carousel-track" data-glide-el="track">
                        <ul className="glide__slides cards-slides">
                            <li className="glide__slide">
                                <CardTestimony
                                    image="/images/image/user-1.jpg"
                                />
                            </li>
                            <li className="glide__slide">
                                <CardTestimony
                                    image="/images/image/user-2.jpg"
                                />
                            </li>
                            <li className="glide__slide">
                                <CardTestimony
                                    image="/images/image/user-3.jpg"
                                />
                            </li>
                            <li className="glide__slide">
                                <CardTestimony
                                    image="/images/image/user-4.jpg"
                                />
                            </li>
                            <li className="glide__slide">
                                <CardTestimony
                                    image="/images/image/user-5.jpg"
                                />
                            </li>
                        </ul>
                    </div>
                    <NavTestimonies />
                </div>
            </div>
        )
    }
}

export default Testimonies
