import React, { Component } from 'react'
import IntroSection from '../molecules/IntroSection';
import Service from '../molecules/Service';

class Services extends Component {
    render() {
        return (
            <>
                <div className="services-left">
                    <div className="header-services">
                        <IntroSection
                            size='h2'
                            title="Servicios"
                            id="servicios"
                            parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia"
                        />
                    </div>
                    <Service

                        className="service-left"
                        image="/images/svg/service-design.svg"
                        name="Diseño de interfaces"
                        parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem"
                    />
                </div>
                <div className="services-right">
                    <Service

                        className="service-right"
                        image="/images/svg/service-develop.svg"
                        name="Desarrollo web"
                        parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem"
                    />
                    <Service

                        className="service-right"
                        image="/images/svg/service-seo.svg"
                        name="Posicionamiento Seo"
                        parag="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem"
                    />
                </div>
            </>
        )
    }
}

export default Services
