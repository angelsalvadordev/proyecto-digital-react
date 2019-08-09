// replica del hoc withAutoScroll transformado en hook.
// No se está utilizando en el proyecto.

import { useState, useEffect } from 'react'

const useAutoScroll = e => {
    e.preventDefault()
    let href = e.target.getAttribute('href')
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

export default useAutoScroll