import React from 'react'

const CardPortfolio = props => {
    return (
        <li className="card-portfolio" >
            <a className="card-portfolio__link" href="#">
                <img className="card-portfolio__image" src={props.image} />
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

export default CardPortfolio
