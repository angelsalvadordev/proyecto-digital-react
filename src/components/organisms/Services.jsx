import React, { Component } from 'react'
import IntroSection from '../molecules/IntroSection';
import Service from '../molecules/Service';

import ServiceDesign from '../../svg/service-design.svg'
import ServiceDevelop from '../../svg/service-develop.svg'
import ServiceSEO from '../../svg/service-seo.svg'

class Services extends Component {
    render() {
        return (
            <>
                <IntroSection
                    title="Servicios"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image={ServiceDesign}
                    name="Diseño de interfaces"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image={ServiceDevelop}
                    name="Desarrollo web"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
                <Service

                    image={ServiceSEO}
                    name="Posicionamiento Seo"
                    parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo"
                />
            </>
        )
    }
}

export default Services
