import React from 'react'
import IntroSection from '../molecules/IntroSection'
import FormContact from '../molecules/FormContact'
import Location from '../molecules/Location'
import SocialContact from '../molecules/SocialContact'
import Credits from '../molecules/Credits'

const Contact = () => {
    return (
        <div className="contact flex">
            <div className="contact-left">
                <IntroSection
                    title="Contacto"
                    className="f-light"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit " />
                <FormContact />
            </div>
            <div className="contact-right">
                <Location />
                <SocialContact />
            </div>
            <Credits />
        </div>
    )
}

export default Contact
