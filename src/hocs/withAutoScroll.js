//Implementacin de HOC para reutilizar la logica del autoScroll
import React from 'react'

const withAutoScroll = (WrappedComponent) => {
    return class WithAutoScroll extends React.Component {
        constructor(props) {
            super(props)
        }

        runAutoScroll = e => {
            e.preventDefault()
            let href = e.target.getAttribute('href')
            // Comprobar si el link contiene un hash para
            if (href.charAt(0) !== "#") return

            let section = document.querySelector(href)

            //Primera comprobacion para saber si el usuario se encuentra en el inicio y evitar bug de redimension del navigation.
            if (window.scrollY === 0 && section.offsetTop > 0) {
                // Fuerza a que la navegacion tome la verdadera altura al hacer scroll de 1px para
                // calcular el nuevo tamaño y evitar errores en el scroll.
                window.scroll({ top: 1 })
            }

            if (section.offsetTop > 0 || href === '#inicio') {
                // Breve retraso para calcular el verdadero tamaño de la navegacion
                setTimeout(() => {
                    //Nueva captura del alto de la navegacion
                    const navSize = document.querySelector('.main-navigation').offsetHeight
                    // Calculo del desplazamiento
                    const rangeScroll = section.offsetTop - navSize
                    window.scroll({
                        top: rangeScroll,
                        left: 0,
                        behavior: 'smooth'
                    })
                }, 200);
            }
        }

        render() {
            return <WrappedComponent {...this.props} autoScroll={this.runAutoScroll} />
        }
    }
}

export default withAutoScroll