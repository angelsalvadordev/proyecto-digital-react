import React from 'react'

// Parte de la seccion Contacto
const Location = () => {
    return (
        <>
            <h2 className="intro-location f-pattaya f-40 f-light">Ubicanos</h2>
            <div className="google-maps"></div>
            <div className="data-location">
                <div className="data">
                    <div className="data__icon f-icon">local_phone<span className="f-poppins-r">Telefono</span></div>
                    <p className="data__info">+51 123 456 789   /   +51 987 654 321</p>
                </div>
                <div className="data">
                    <div className="data__icon f-icon">mail<span className="f-poppins-r">Email</span></div>
                    <p className="data__info">info@proyectodigital.com</p>
                </div>
                <div className="data">
                    <div className="data__icon f-icon">add_location<span className="f-poppins-r">Direccion</span></div>
                    <p className="data__info">Av. independencia No. 670, Centro</p>
                </div>
            </div>
        </>
    )
}

export default Location
