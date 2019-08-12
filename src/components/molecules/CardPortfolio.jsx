import React from 'react'
import PropTypes from 'prop-types'

const CardPortfolio = props => {
    return (
        <li className="card-portfolio" >
            <a className="card-portfolio__link" href="javascript: void(0)">
                <img className="card-portfolio__image" src={props.image} alt={props.name} />
                <div className="card-hover">
                    <span>fullscreen</span>
                    <p>ver Proyecto</p>
                </div>
            </a>
            <div className="card-portfolio-info">
                <a href="#" className="card-portfolio-info__link f-14">
                    <span className="f-icon card-portfolio-info__icon">remove_red_eye</span>
                    Ver Proyecto
                </a>
            </div>
        </li>
    )
}

CardPortfolio.propTypes = {
    image: PropTypes.string
}

CardPortfolio.defaultProps = {
    image: '/images/image/not-found.png'
}

export default CardPortfolio
