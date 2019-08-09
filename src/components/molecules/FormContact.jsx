import React from 'react'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const validateForm = ({ errors, ...rest }) => {
    let valid = true
    Object.values(errors).map(err => err.length > 0 && (valid = false))

    Object.values(rest).map(value => (value === null || value === "") ? (valid = false) : null)

    return valid
}

// Parte de la seccion Contact
class FormContact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            email: null,
            message: null,
            tooltipMessage: "waiting...",
            errors: {}
        }
    }

    handleChange = ({ target }) => {
        const { name, value } = target
        let errors = { ...this.state.errors }
        switch (name) {
            case "name":
                errors.name = value === "" || value.length < 3 && value.length > 0
                    ? "Se requiere 3 caracteres como minimo"
                    : ""
                break
            case "email":
                errors.email = value === "" || !(emailRegex.test(value))
                    ? "Email no valido"
                    : ""
                break
            case "message":
                errors.message = value === "" || value.length <= 0
                    ? "Introduce un mensaje"
                    : ""
                break
            default:
                break
        }
        this.setState({
            [name]: value,
            errors
        })
    }

    handleTooltipMessage = e => {
        this.setState({
            tooltipMessage: "waiting..."
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (validateForm(this.state)) {
            console.log('Todo bien, todo correcto y yo que me alegro')
            this.setState({
                tooltipMessage: "valid"
            })
            return
        }
        console.log('formulario invalido')
        let { errors, ...rest } = this.state
        let { name, email, message } = rest
        this.setState({
            tooltipMessage: "error"
        })
        if (name === null && email === null && message === null) {
            this.setState({
                errors: {
                    name: "Es necesario llenar este campo",
                    email: "Es necesario llenar este campo",
                    message: "Es necesario llenar este campo"
                }
            })
        }
    }

    render() {
        const { errors } = this.state
        return (
            <form action="#" className="contact-form" onSubmit={this.handleSubmit} noValidate>
                <input
                    name="name"
                    className={`contact-input ${errors.name && "input-error"}`}
                    type="text"
                    placeholder="Nombre (requerido)"
                    noValidate
                    onBlur={this.handleChange}
                    onChange={this.handleChange}

                />
                {errors.name && <span className="error-message">{errors.name}</span>}
                <input
                    name="email"
                    className={`contact-input ${errors.email && "input-error"}`}
                    type="email"
                    placeholder="Tu email (requerido)"
                    noValidate
                    onBlur={this.handleChange}
                    onChange={this.handleChange}

                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                <input
                    name="subject"
                    className="contact-input"
                    type="text"
                    placeholder="Asunto"
                    noValidate
                    onChange={this.handleChange}

                />
                <div className="contact-message">
                    <textarea
                        name="message"
                        className={`contact-input contact-textarea f-poppins-r ${errors.message && "input-error"}`}
                        type="text"
                        placeholder="Mensaje (requerido)"
                        noValidate
                        onBlur={this.handleChange}
                        onChange={this.handleChange}

                    />
                    <input
                        className="contact-input contact-button f-icon"
                        type="submit"
                        value="send"

                    />
                    {this.state.tooltipMessage === "valid"
                        ? <span className="tooltip-message valid">
                            <i className="tooltip-close close-valid f-icon" onClick={this.handleTooltipMessage}>close</i>
                            <p className="tooltip-message__text message-success f-13">Mensaje enviado :)</p>
                        </span>
                        : null}

                    {this.state.tooltipMessage === "error"
                        ? <span className="tooltip-message error ">
                            <i className="tooltip-close close-error f-icon" onClick={this.handleTooltipMessage}>close</i>
                            <p className="tooltip-message__text message-error  f-13">Por favor, corrige los campos para enviar tu mensaje :(</p>
                        </span>
                        : null}
                </div>
                {errors.message && <span className="error-message">{errors.message}</span>}
            </form>
        )
    }
}

export default FormContact
