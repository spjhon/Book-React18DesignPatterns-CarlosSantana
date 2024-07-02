import MyComponent from './components/MyComponent'

/*Sí, en un proyecto React, cuando importas una carpeta, el compilador buscará por defecto un archivo llamado index.ts o 
index.tsx dentro de esa carpeta para realizar la importación. Esto es una convención que facilita la importación de módulos.*/

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  )
}

export default App
