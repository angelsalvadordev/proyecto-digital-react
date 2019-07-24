import React from 'react'

const Location = () => {
    return (
        <>
            <h2 className="intro-location f-pattaya f-40 f-light">Ubicanos</h2>
            <div className="google-maps"></div>
            <div className="data-location">
                <div className="data">
                    <span className="data__icon f-icon">local_phone</span>
                    <p className="data__info">+51 123 456 789   /   +51 987 654 321</p>
                </div>
                <div className="data">
                    <span className="data__icon f-icon">mail</span>
                    <p className="data__info">info@proyectodigital.com</p>
                </div>
                <div className="data">
                    <span className="data__icon f-icon">add_location</span>
                    <p className="data__info">Av. independencia No. 670, Centro</p>
                </div>
            </div>
        </>
    )
}

export default Location
