/*import { FC } from 'react';: Esto importa FC (Function Component) de React. FC es un tipo en TypeScript que se usa para definir 
componentes funcionales.
import withInnerWidth from './WithInnerWidth';: Esto importa el componente de orden superior (HOC) withInnerWidth desde el archivo 
correspondiente.*/

import { FC } from 'react'
import withInnerWidth from './WithInnerWidth'

// Lo que le entra:
// Este componente funcional (MyComponent) toma una prop llamada innerWidth, que es un número.
type Props = {
  innerWidth: number
}

// Lo que hace:
// MyComponent es un componente funcional que renderiza un div mostrando el valor de innerWidth.
const MyComponent: FC<Props> = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

// Lo que retorna:
// Exporta MyComponent envuelto con el HOC withInnerWidth, que le provee la prop innerWidth.
export default withInnerWidth(MyComponent)
