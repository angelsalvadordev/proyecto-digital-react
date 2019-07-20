import React from 'react'
import Button from '../atoms/Button';
const NavPortfolio = () => {
    return (
        <>
            <div className="portfolio-nav flex">
                <Button name="interfaces" className="f-light bg-primary" link="#" />
                <Button name="desarrollo web" className="f-tertiary bg-grey" link="#" />
                <Button name="posicionamiento" className="f-light bg-primary" link="#" />
            </div>
            <div className="grid-gallery grid">
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-1.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-2.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-3.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-4.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-5.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-6.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-7.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-8.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-9.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-10.jpg" />
                </a>
                <a className="grid-gallery__item" href="#">
                    <img className="grid-gallery__image" src="/media/images/img-11.jpg" />
                </a>
            </div>
        </>
    )
}

export default NavPortfolio
