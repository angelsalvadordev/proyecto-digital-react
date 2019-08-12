import React from 'react'

const withAutoScroll = (WrappedComponent) => {
    return class WithAutoScroll extends React.Component {
        constructor(props) {
            super(props)
        }

        runAutoScroll = e => {
            e.preventDefault()
            const nameSection = e.target.getAttribute('href')
            let sectionPosition

            if (nameSection.charAt(0) !== "#") return

            sectionPosition = document.querySelector(nameSection).offsetTop

            if (window.scrollY === 0 && sectionPosition > 0) {
                this.resizeNavigation()
            }

            this.goTo(sectionPosition)
        }

        resizeNavigation = () => {
            window.scroll({ top: 1 })
        }

        goTo = (sectionPosition) => {
            setTimeout(() => {
                const navSize = document.querySelector('.main-navigation').offsetHeight
                const rangeScroll = sectionPosition - navSize
                window.scroll({
                    top: rangeScroll,
                    left: 0,
                    behavior: 'smooth'
                })
            }, 200); // Para calcular el nuevo tamaño del resize despues de la animacion del elemento
        }

        render() {
            return <WrappedComponent {...this.props} autoScroll={this.runAutoScroll} />
        }
    }
}

export default withAutoScroll