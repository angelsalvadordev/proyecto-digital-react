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
                    <CardPortfolio image="/media/images/img-1.jpg" />
                    <CardPortfolio image="/media/images/img-2.jpg" />
                    <CardPortfolio image="/media/images/img-3.jpg" />
                    <CardPortfolio image="/media/images/img-4.jpg" />
                    <CardPortfolio image="/media/images/img-5.jpg" />
                    <CardPortfolio image="/media/images/img-6.jpg" />
                    <CardPortfolio image="/media/images/img-7.jpg" />
                    <CardPortfolio image="/media/images/img-8.jpg" />
                    <CardPortfolio image="/media/images/img-9.jpg" />
                    <CardPortfolio image="/media/images/img-10.jpg" />
                    <CardPortfolio image="/media/images/img-11.jpg" />

                </ul>
            </div>
        </>
    )
}

export default NavPortfolio
