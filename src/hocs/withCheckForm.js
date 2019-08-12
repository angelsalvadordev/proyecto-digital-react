import React from 'react'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const withCheckForm = (WrappedComponent) => {
    return class WithCheckForm extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                name: null,
                email: null,
                message: null,
                checkMessage: "none",
                errors: {}
            }
        }

        handleSubmit = e => {
            e.preventDefault()
            const inputsCollection = Array.from(e.target.querySelectorAll('[name]'))
            const errorsCollection = {}

            inputsCollection.map(input => {
                return errorsCollection[input.name] = (this.handleErrors(input))
            })

            let checkMessage = this.validateAllForm(this.state)

            this.setState({
                checkMessage,
                errors: errorsCollection
            })
        }

        handleInput = event => {
            const { name, value } = event.target
            const errors = { ...this.state.errors }
            errors[name] = this.handleErrors(event.target)
            this.setState({
                [name]: value,
                errors
            })
        }

        handleErrors = element => {
            const { name, value } = element
            let nameError, emailError, messageError
            switch (name) {
                case "name":
                    (value.length > 0 && value.length < 3) || value === ""
                        ? nameError = "Se requiere 3 caracteres como minimo"
                        : nameError = ""
                    return nameError
                case "email":
                    !(emailRegex.test(value)) || value === ""
                        ? emailError = "Email no valido"
                        : emailError = ""
                    return emailError
                case "message":
                    value.length <= 0 || value === ""
                        ? messageError = "Introduce un mensaje"
                        : messageError = ""
                    return messageError
                default:
                    console.log('error inesperado')
                    break
            }
        }

        validateAllForm = ({ errors, ...rest }) => {
            let valid = true
            Object.values(rest).map(value => (value === null || value.length === 0) && (valid = false))
            Object.values(errors).map(error => error.length > 0 && (valid = false))
            return valid
        }

        deleteCheckMessage = () => {
            this.setState({
                checkMessage: "none"
            })
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleInput={this.handleInput}
                    deleteCheckMessage={this.deleteCheckMessage} />
            )
        }
    }
}

export default withCheckForm