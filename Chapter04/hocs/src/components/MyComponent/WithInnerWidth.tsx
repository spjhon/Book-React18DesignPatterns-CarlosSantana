import { useEffect, useState } from 'react'

// Lo que le entra:
// Este es un componente de orden superior (HOC) que toma un componente (Component) y sus props.
const withInnerWidth = (Component: any) => (props: any) => {
  // Lo que hace:
  // useState inicializa el estado innerWidth con el ancho de la ventana.
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  // handleResize es una función que actualiza el estado innerWidth con el nuevo ancho de la ventana.
  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }

  // useEffect se utiliza para añadir un event listener que detecta el cambio de tamaño de la ventana al montar el componente.
  // Al desmontar el componente, el event listener se elimina para evitar posibles fugas de memoria.
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      // <<< Esto emula el comportamiento de componentWillUnmount.
      window.removeEventListener('resize', handleResize)
    }
  }, []) // <<< Esto emula el comportamiento de componentDidMount.

  // Lo que retorna:
  // Retorna el componente original (Component) con todas sus props y el estado innerWidth adicional.
  return <Component {...props} innerWidth={innerWidth} />
}

export default withInnerWidth

// El componente de arriba es equivalente a este:

/*

import { useEffect, useState } from 'react'

// Declaración de función del HOC (Higher-Order Component)
function withInnerWidth(Component: any) {
  return function WrappedComponent(props: any) {
    // useState inicializa el estado innerWidth con el ancho de la ventana.
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    // handleResize es una función que actualiza el estado innerWidth con el nuevo ancho de la ventana.
    const handleResize = () => {
      setInnerWidth(window.innerWidth)
    }

    // useEffect se utiliza para añadir un event listener que detecta el cambio de tamaño de la ventana al montar el componente.
    // Al desmontar el componente, el event listener se elimina para evitar posibles fugas de memoria.
    useEffect(() => {
      window.addEventListener('resize', handleResize)

      return () => {
        // Esto emula el comportamiento de componentWillUnmount.
        window.removeEventListener('resize', handleResize)
      }
    }, []) // Esto emula el comportamiento de componentDidMount.

    // Retorna el componente original (Component) con todas sus props y el estado innerWidth adicional.
    return <Component {...props} innerWidth={innerWidth} />
  }
}

export default withInnerWidth


*/