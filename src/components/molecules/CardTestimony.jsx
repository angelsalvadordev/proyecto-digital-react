import React from 'react'
import PropTypes from 'prop-types'
const CardTestimony = props => {
    return (
        <div className="card-testimony flex justify-content-center">
            <img className="card-testimony__image" src={props.image} alt="imagen" />
            <div className="card-testimony__bg bg-light">
                <h4 className="f-24 f-poppins-r card-testimony__name">Alice Cooper</h4>
                <span className="f-14 f-primary card-testimony__company">GoodAgency, CEO</span>
                <p className="f-13 f-poppins-i card-testimony__parag">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                <div className="stars-testimony">
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                    <span className="f-icon f-20 f-secondary star-testimony">star_rate</span>
                </div>
                <div>
                    <svg className="card-testimony__triangle" viewBox="0 0 100 100" preserveAspectRatio="none" fill="white">
                        <polygon points="100 0 100 100 0 0"></polygon>
                    </svg>
                </div>
            </div>
        </div>
    )
}

CardTestimony.propTypes = {
    image: PropTypes.string.isRequired
}

CardTestimony.defaultProps = {
    image: '/images/image/not-found.png'
}


export default CardTestimony
