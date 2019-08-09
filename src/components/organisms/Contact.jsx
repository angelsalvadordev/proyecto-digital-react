import React from 'react'
import IntroSection from '../molecules/IntroSection'
import FormContact from '../molecules/FormContact'
import Location from '../molecules/Location'
import SocialContact from '../molecules/SocialContact'
import Credits from '../molecules/Credits'

const Contact = () => {
    return (
        <>
            <div className="contact flex">
                <div className="contact-left">
                    <IntroSection
                        size="h2"
                        id="contacto"
                        title="Contacto"
                        className="f-light"
                        parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia" />
                    <FormContact />
                </div>
                <div className="contact-right">
                    <Location />
                    <SocialContact />
                </div>
            </div>
            <Credits />
        </>
    )
}

export default Contact
