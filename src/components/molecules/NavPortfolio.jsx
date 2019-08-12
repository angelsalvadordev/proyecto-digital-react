import React from 'react'
import Button from '../atoms/Button';
import CardPortfolio from './CardPortfolio';
const NavPortfolio = () => {
    return (
        <>
            <div className="portfolio-nav flex">
                <Button name="interfaces" className="f-light bg-primary" />
                <Button name="desarrollo web" className="f-tertiary bg-grey" />
                <Button name="posicionamiento" className="f-light bg-primary" />
            </div>
            <div className="grid-gallery">
                <ul className="gallery-cards grid">
                    <CardPortfolio image="/images/image/img-1.jpg" name="image1" />
                    <CardPortfolio image="/images/image/img-3.jpg" name="image2" />
                    <CardPortfolio image="/images/image/img-2.jpg" name="image3" />
                    <CardPortfolio image="/images/image/img-4.jpg" name="image4" />
                    <CardPortfolio image="/images/image/img-5.jpg" name="image5" />
                    <CardPortfolio image="/images/image/img-6.jpg" name="image6" />
                    <CardPortfolio image="/images/image/img-7.jpg" name="image7" />
                    <CardPortfolio image="/images/image/img-8.jpg" name="image8" />
                    <CardPortfolio image="/images/image/img-9.jpg" name="image9" />
                    <CardPortfolio image="/images/image/img-10.jpg" name="image10" />
                    <CardPortfolio image="/images/image/img-11.jpg" name="image11" />
                </ul>
            </div>
        </>
    )
}

export default NavPortfolio
