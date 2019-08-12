import React from 'react'
import withCheckForm from '../../hocs/withCheckForm';

const FormContact = props => {
    const { checkMessage, errors, handleSubmit, handleInput, deleteCheckMessage } = props
    return (
        <form action="#" className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
                name="name"
                className={`contact-input ${errors.name && "input-error"}`}
                type="text"
                placeholder="Nombre (requerido)"
                noValidate
                onBlur={handleInput}

            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            <input
                name="email"
                className={`contact-input ${errors.email && "input-error"}`}
                type="email"
                placeholder="Tu email (requerido)"
                noValidate
                onBlur={handleInput}

            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            <input
                className="contact-input"
                type="text"
                placeholder="Asunto"
                noValidate

            />
            <div className="contact-message">
                <textarea
                    name="message"
                    className={`contact-input contact-textarea f-poppins-r ${errors.message && "input-error"}`}
                    type="text"
                    placeholder="Mensaje (requerido)"
                    noValidate
                    onBlur={handleInput}

                />
                <input
                    className="contact-input contact-button f-icon"
                    type="submit"
                    value="send"

                />
                {checkMessage === true
                    ? <span className="tooltip-message valid">
                        <i className="tooltip-close close-valid f-icon" onClick={deleteCheckMessage}>close</i>
                        <p className="tooltip-message__text message-success f-13">Mensaje enviado :)</p>
                    </span>
                    : null}

                {checkMessage === false
                    ? <span className="tooltip-message error ">
                        <i className="tooltip-close close-error f-icon" onClick={deleteCheckMessage}>close</i>
                        <p className="tooltip-message__text message-error  f-13">Por favor, corrige los campos para enviar tu mensaje :(</p>
                    </span>
                    : null}
            </div>
            {errors.message && <span className="error-message">{errors.message}</span>}
        </form>
    )
}

export default withCheckForm(FormContact)
