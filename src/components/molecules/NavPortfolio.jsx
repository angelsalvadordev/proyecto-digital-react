import React from 'react'
import Button from '../atoms/Button';
import CardPortfolio from './CardPortfolio';
const NavPortfolio = () => {
    return (
        <>
            <div className="portfolio-nav flex">
                <Button name="interfaces" className="f-light bg-primary" link="#" />
                <Button name="desarrollo web" className="f-tertiary bg-grey" link="#" />
                <Button name="posicionamiento" className="f-light bg-primary" link="#" />
            </div>
            <div className="grid-gallery">
                <ul className="gallery-cards grid">
                    <CardPortfolio image="/images/image/img-1.jpg" />
                    <CardPortfolio image="/images/image/img-2.jpg" />
                    <CardPortfolio image="/images/image/img-3.jpg" />
                    <CardPortfolio image="/images/image/img-4.jpg" />
                    <CardPortfolio image="/images/image/img-5.jpg" />
                    <CardPortfolio image="/images/image/img-6.jpg" />
                    <CardPortfolio image="/images/image/img-7.jpg" />
                    <CardPortfolio image="/images/image/img-8.jpg" />
                    <CardPortfolio image="/images/image/img-9.jpg" />
                    <CardPortfolio image="/images/image/img-10.jpg" />
                    <CardPortfolio image="/images/image/img-11.jpg" />
                </ul>
            </div>
        </>
    )
}

export default NavPortfolio
