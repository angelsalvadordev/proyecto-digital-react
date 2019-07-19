import React, { Component } from 'react'
import IntroSection from '../molecules/IntroSection';
import Service from '../molecules/Service';

class Services extends Component {
    render() {
        return (
            <>
                <IntroSection
                    title="Servicios"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image="/media/svg/service-design.svg"
                    name="Diseño de interfaces"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image="/media/svg/service-develop.svg"
                    name="Desarrollo web"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image="/media/svg/service-seo.svg"
                    name="Posicionamiento Seo"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
            </>
        )
    }
}

export default Services
