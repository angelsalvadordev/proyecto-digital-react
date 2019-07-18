import React from 'react'
import './CardTestimony.css'
import imageUser from '../../images/descarga.jpg'
const CardTestimony = () => {
    return (
        <div className="card-testimony flex justify-content-center">
            <img className="card-testimony__image" src={imageUser} alt="imagen" />
            <div className="card-testimony__bg bg-light">
                <h4 className="f-24 f-poppins-r">Alice Cooper</h4>
                <span class="f-14 f-primary">GoodAgency, CEO</span>
                <p className="f-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem </p>
                <div className="stars-testimony">
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                </div>
            </div>
        </div>
    )
}

export default CardTestimony
