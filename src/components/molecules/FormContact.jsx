import React from 'react'

class FormContact extends React.Component {
    render() {
        return (
            <form action="#" className="contact-form">
                <input className="contact-input" type="text" placeholder="Nombre (requerido)" />
                <input className="contact-input" type="text" placeholder="Tu email (requerido)" />
                <input className="contact-input" type="text" placeholder="Asunto" />
                <div className="contact-message">
                    <textarea className="contact-input contact-textarea f-poppins-r" type="text" placeholder="Mensaje (requerido)"></textarea>
                    <input className="contact-input contact-button f-icon" type="submit" value="send" />
                </div>
            </form>
        )
    }
}

export default FormContact
