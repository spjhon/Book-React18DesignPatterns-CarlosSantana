# React 18 Design Patterns and Best Practices

## Chapter 01, Taking Your First Steps with React

- **Differentiating between declarative and imperative programming:**

- One of the reasons why React is so powerful is that it enforces a declarative programming paradigm.
- La programación declarativa tiende a evitar la creación y mutación de un estado.
- React follows a declarative paradigm, and there’s no need to tell it how to interact with the DOM; you declare what you want to see on the screen.
- To control the UI flow, React uses a particular type of object called an element.

### 1.1. Unlearning everything

Templates engines como Mustache puede que de cierta sensacion de separacion de responsabilidades pero a la final javascript y HTML trabajan muy juntos, REACT ayuda en este sentido

### 1.2. Understanding JavaScript fatigue

Se tiene la misconcepcion de que react es muy grande, sin embargo es una libreria pequeña.

React is split into two packages:

- **react:** Implements the core features of the library
- **react-dom:** Contains all the browser-related features

### 1.3. Getting started with React without the fatigue

React is split into two packages:

- react: Implements the core features of the library
- react-dom: Contains all the browser-related features

La clave para los cambios rapidos y bruscos al ecosistema de javascript y principalmente REACT es un balance entre estar acutalizado y tener una tecnologia estable.

### 1.4. Bye to Create-React-App, welcome to Vite

Vite es el nuevo rey

## 2. Introducing TypeScript

Para mejor informacion ver el repositorio con el libro completo **Learning Typescript**

Este capitulo es muy basico ya que solo raspa por encima que se trata, los temas fueron los siguientes:

- TypeScript’s features
- Convert JavaScript code into TypeScript
- Types
- Interfaces
- Extending interfaces and types
- Implementing interfaces and types
- Merging interfaces
- Enums
- Namespaces
- Template literal types
- TypeScript configuration file

The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project

Lo unico es que especifica un archivo configTypescript especifico para **Monorepos**

## 3. Cleaning Up Your Code

[**Mas informacion sobre JSX aqui**](/03react/Patterns/JSXRules)

En esta seccion se cubre los siguientes temas:

- What is JSX and why should we use it?
- What is Babel and how can we use it to write modern JavaScript code?
- The main features of JSX and the differences between HTML and JSX.
- Best practices to write JSX in an elegant and maintainable way.
- How linting, and ESLint in particular, can make our JavaScript code consistent across applications and teams.
- The basics of functional programming and why following a functional paradigm will make us write better React components.

### 3.1. Common JSX patterns

#### 3.1.1. Multiline

```tsx
<div>
 <Header />
    <div>
     <Main content={...} />
    </div>
</div>

//no olvidar el return cuando es multilinea utilizar los parentesis
return ( 
 <div /> 
)
```

#### 3.1.2. Multi-properties

A common solution is to write each attribute on a new line, with one level of indentation, and then align the closing bracket with the opening tag:

```tsx
<button
 foo="bar"
 veryLongPropertyName="baz"
 onSomething={this.handleSomething}
/>
```

#### 3.1.3. Conditionals

```tsx
let button
 
if (isLoggedIn) { 
 button = <LogoutButton />
} 
 
return <div>{button}</div>
```

In line conditional (terneary operation)

```tsx
<div> 
 {isLoggedIn && <LoginButton />} 
</div>
```

Utilizando un "else":

```tsx
let button

if (isLoggedIn) { 
 button = <LogoutButton />
} else { 
 button = <LoginButton />
} 
 
return <div>{button}</div>
```

Alternativamente se puede utilizar un corto circuito:

```tsx
<div> 
 {isLoggedIn ? <LogoutButton /> : <LoginButton />} 
</div>
```

```tsx
<button [...]> 
 {isFetching ? 'Loading...' : 'Load More'} 
</button>
```

```tsx
<div>
 {dataIsReady && (isAdmin || userHasPermissions) && 
 <SecretData />
 }
</div>
```

Un ejemplo de un componente mas completo con condicionales

```tsx
const MyComponent = ({ dataIsReady, isAdmin, userHasPermissions }) => {
 const canShowSecretData = () => { 
 return dataIsReady && (isAdmin || userHasPermissions)
 } 
 
 return (
 <div> 
 {canShowSecretData() && <SecretData />} 
 </div>
 )
}
```

#### 3.1.4. Loops

If we write a function that returns an array inside our JSX template, each element of the array gets compiled into an element.

```tsx
<ul> 
 {users.map(user => <li>{user.name}</li>)} 
</ul>
```

#### 3.1.5. Sub-rendering

Split it into smaller functions in a way that lets us keep all the logic in the same component.

```tsx
const renderUserMenu = () => { 
 // JSX for user menu 
} 
 
const renderAdminMenu = () => { 
 // JSX for admin menu 
} 
 
return ( 
 <div> 
 <h1>Welcome back!</h1> 
 {userExists && renderUserMenu()} 
 {userIsAdmin && renderAdminMenu()} 
 </div> 
)
```

This is not always considered best practice because it seems more obvious to split the component into smaller ones. However, sometimes it helps to keep the render method cleaner.

### 3.2. Git Hooks

To avoid having unlinted code in our repository, what we can do is add ESLint at one point of our process using Git Hooks.

### 3.3. Functional programming

FP principles, such as **immutability**, **pure functions**, and **higher-order functions**, **Currying**, **Composition** can help us write more maintainable and testable code.

- Higher-order functions, which take functions as arguments and/or return functions as output, can help us create more modular and reusable code.

#### 3.4. Currying (pagina 56)

Currying is the process of converting a function that takes multiple arguments into a function one argument at a time and returning another function.

#### 3.5. Higher Order Functions

HoFs are functions that take a function as a parameter, and optionally some other parameters, and return a function. The returned function is usually enhanced with some special behaviors.

```javascript
const add = (x, y) => x + y;
const log =
  (fn) =>
  (...args) => {
    return fn(...args);
  };
const logAdd = log(add);

//Lo que es equivalente a:

function log(fn) {
  return function (...args) {
    const result = fn(...args);
    console.log(`Arguments: ${args.join(", ")}, Result: ${result}`);
    return result;
  };
}
```

### Tips

- Desde react 17 no se utiliza `React.createElement('div')` para crear elementos, por eso ya no se necesita importar react desde cada componente.

When we install **esLint** and run it for the first time, we do not see any errors because it is completely configurable, and it does not come with any default rules.

Se recomienda instalar la siguiente lista de pluggins esLint:

- npm install
- -g eslint
- eslint-config-airbnb
- eslint-config-prettier
- eslintplugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-pluginreact

## 4. Exploring Popular Composition Patterns

- How components communicate with each other using props and children
- The container and presentational patterns and how they can make our code more maintainable
- What higher-order components (HOCs) are and how, thanks to them, we can structure our applications in a better way
- What the function of the child component pattern is and what its benefits are.

### 4.1. Communicating components

Composing React components is straightforward; you just have to include them in the render:

```jsx
const Profile = ({ user }) => ( 
 <>
 <Picture profileImageUrl={user.profileImageUrl} /> 
 <UserName name={user.name} screenName={user.screenName} /> 
 </> 
)
```

### 4.1. The Children Prop

Good Practices:

- Por ejemplo en lugar de utilizar solo los atributos del prop, buscar utilizar mas a menudo los children para pasar elementos enteros dentro de otros elementos, por ejemplo en lugar de pasar un prop text se pasaria un children parragpraph.

### 4.2. Exploring the container and presentational patterns

La idea es tener un componente separado en dos componentes, uno se dedica a la logica solamente y otro se dedica a la presentacion.

The following are the characteristics of container components:

- They are more concerned with behavior.
- They render their presentational components.
- They make API calls and manipulate data.
- They define event handlers.

The following are the characteristics of presentational components:

- They are more concerned with the visual representation.
- They render the HTML markup (or other components).
- They receive data from the parents in the form of props.
- They are often written as stateless functional components.

#### 4.2.3. Higher order component example

HOCs are functions that take a component as input and return an enhanced component as output, en el segundo ejemplo del chapter 4 se muestra por ejemplo la necesidad de agregar el mismo className a todos los componentes, lo que se hace es crear un componente con el className y que se convierta en una especie de envoltura para otros componentes.

```jsx
const withClassName = (Component) => (props) =>
  <Component {...props} className="my-class" />;
```

- In the React community, it’s common to use the with prefix for HOCs.
- HOCs typically spread the props they receive on the component because they aim to be transparent and only add new behavior.
- Ver el segundo ejemplo del chapter 04, HOCS.

#### 4.2.3. Understanding FunctionAsChild

El concepto principal es que en lugar de pasar un hijo como componente, definimos una función que puede recibir parámetros del padre. Veamos cómo se ve:

```javascript
const FunctionAsChild = ({ children }) => children();
```

la idea es utilizarlo de la siguiente forma:

```javascript
<FunctionAsChild>{() => <div>Hello, World!</div>}</FunctionAsChild>
```

Otro ejemplo:

```javascript
const Name = ({ children }) => children('World')

<Name>
 {name => <div>Hello, {name}!</div>}
</Name>
```

Ventajas de este pattern:

- Encapsular componentes
- Componer componentes con este enfoque no obliga a los hijos a usar nombres de propiedades predefinidos.
- composing components dynamically.

## 5. Writing Code for the Browser

we will dive into controlled vs. uncontrolled components, refs, handling events, and animations in React.

In this chapter, we will go through the following topics:

- Using different techniques to create forms with React
- Listening to DOM events and implementing custom handlers
- A way of performing imperative operations on DOM nodes using refs (MAS INFORMACION EN EL EJERCICIO 006 DEL REPOSITORIO DE GRIDDER)
- Creating simple animations that work across different browsers
- The React way of generating SVG.

### 5.1. Understanding and implementing forms

#### 5.1.1. Uncontrolled and Controlled components

Un componente formulario no controlado es aquel en cuyos inputs va el valor del state, controlando en cada render que muestra en el input, mientras que uno no controlado siempre va a tener el valor que el usuario da.

Resumen:

- **Componentes controlados:** El estado del formulario es manejado completamente por el componente React. Cada cambio en el formulario actualiza el estado del componente.
- **Componentes no controlados:** El estado del formulario no es manejado por el componente React. Los valores de los elementos del formulario se manejan directamente a través del DOM.
  En términos prácticos, los componentes controlados son generalmente preferidos en React, ya que proporcionan un control más explícito sobre los datos y son más consistentes con la filosofía de React de tener una única fuente de verdad (el estado del componente).

#### 5.1.2. Handling events

Curiosamente no todos los browser hacen o poseen los mismos eventos, entonces REACT busca que el escribir eventHandlers sea mas facil.

Este es el pattern comun de react para capturar eventos por medio del "on", Grider explica mejor este aspecto, en este repositorio se utiliza el switch project.

- A common practice is to write a single event handler for each component, which can trigger different actions according to the event type.

#### 5.1.3. Exploring refs

- **Refs in React are a mechanism to access and interact with the DOM elements rendered by a component. They provide a way to modify the DOM or access DOM properties directly**

React is **declarative**, but, there might be some cases where you need to access the underlying DOM nodes to perform some imperative operations. This should be avoided.

- **useRef is a React Hook that lets you reference a value that’s not needed for rendering.**

#### 5.1.4. Understanding forwardRef

React.forwardRef is a higher-order component that allows you to pass a ref down to a child component.

#### 5.1.5. Implementing animations

React comes with an add-on, called react-transition-group, which is a component that helps us build animations in a declarative way.

`npm install --save react-transition-group @types/react-transition-group`

Los datos del libro estan obsoletos ya, entonces se aplica un ejemplo obtenido directamente de la documentacion y mejorado por medio de chatGPT.

#### 5.1.6. Exploring SVG

Desde el punto de vista de React, no hay ninguna diferencia si mostramos un elemento div o un elemento SVG desde el método render, y esto es lo que lo hace tan poderoso. También tendemos a elegir SVG porque podemos modificarlos fácilmente en tiempo de ejecución usando CSS y JavaScript, lo que los convierte en un excelente candidato para el enfoque funcional de React.

Esto es bastante poderoso cuando construimos interfaces de usuario, especialmente en un equipo donde compartimos nuestro conjunto de íconos y queremos tener algunos valores predeterminados en él, pero también queremos permitir que otros equipos decidan sus configuraciones sin tener que recrear las mismas formas SVG.

## 6. Making Your Components Look Beautiful

Repasaremos todas las razones por las cuales el CSS regular puede no ser el mejor enfoque para estilizar componentes, y exploraremos varias soluciones alternativas.

En este capítulo, cubriremos los siguientes temas:

- Problemas comunes con CSS regular a gran escala
- Qué significa usar estilos inline en React y sus desventajas
- Cómo configurar un proyecto desde cero utilizando Webpack y módulos CSS
- Características de los módulos CSS y por qué representan una gran solución para evitar el CSS global
- styled-components, una nueva biblioteca que ofrece un enfoque moderno para estilizar componentes de React.

### 6.1. CSS in JavaScript

Los problemas mas comunes de CSS:

- Global namespace
- Dependencies
- Dead code elimination
- Minification
- Sharing constants
- Non-deterministic resolution
- Isolation

### 6.2 Understanding and implementing inline styles

Observar el ejemplo de inline style de sotrybook o el ejemplo in-line style de este repositorio en el capitulo 6, las desventajas de este sistema son:

- Con los estilos en línea, no es posible usar pseudo-selectores (por ejemplo,:hover) y pseudo-elementos, lo cual es una limitación bastante significativa si estás creando una interfaz de usuario con interacciones y animaciones.
- Media queries, que no pueden ser definidas usando estilos en línea, y esto dificulta la creación de aplicaciones web responsivas. Dado que los estilos se declaran utilizando objetos de JavaScript, tampoco es posible usar estilos de respaldo.
- Another feature of CSS that it is not possible to emulate using inline styles is animations.

### 6.3. Using CSS modules

En el mundo de React, Webpack es especialmente popular porque ofrece muchas características interesantes y útiles, siendo la primera el concepto de loaders. Con Webpack, puedes potencialmente cargar cualquier dependencia aparte de JavaScript, si existe un loader para ellas. Por ejemplo, puedes cargar archivos JSON, así como imágenes y otros recursos, dentro del bundle.

- En este capitulo se presenta una buena introduccion a instalar webpack en un projecto sin react, en el repositorio de storybook, el ejemplo es desde el engine de storybook.
- Tambien toca el tema de Atomic CSS y el concepto de Atomic CSS Modules.

El siguiente es un ejemplo de composicion css utilizando atomic css modules

Let’s look at an example:

```css
.title {
 composes: mb0 fw6;
}
```

Here’s another example:

```jsx
<h2 className={styles.title}>Hello React</h2>
```

### 6.4. Implementing styled-components

Styles components es una libreria que junta todos los aspectos de css modules, clases uilitarias y composicion utilizando un sistema de template con el añadido que se pueden utilizar pseudo clases y animaciones y mucha cosas que librerias como tailwind carece.

## 7. Anti-Patterns to Be Avoided

In this chapter, we will cover the following topics:

- Initializing the state using properties
- Using indexes as a key
- Spreading properties on DOM elements

### 7.1. Initializing the state using properties

- Inizializar state con props es un anti-pattern y hay que tener cuidado

### 7.2. Using indexes as a key

In Chapter 15, Improving the Performance of Your Applications, which talks about performance and the reconciler, we saw how we can help React figure out the shortest path to update the DOM  by using the key prop.

Entonces una forma de vencer este antipattern es el siguiente:

La fecha se utilizó como un método rápido para generar un identificador único, pero no es necesariamente la mejor opción. En su lugar, podrías usar un identificador único generado, como un UUID (Universally Unique Identifier). Aquí te dejo una versión mejorada usando `uuid` para generar identificadores únicos:

Primero, instala la librería `uuid` si no la tienes instalada:

```bash
npm install uuid
```

Luego, actualiza tu componente para usar `uuid`:

```jsx
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const List: FC = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), value: "foo" },
    { id: uuidv4(), value: "bar" }
  ]);

  const handleClick = () => {
    const newItems = [{ id: uuidv4(), value: "baz" }, ...items];
    setItems(newItems);
  };

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <input type="text" />
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default List;
```

En este ejemplo, `uuidv4()` se utiliza para generar un identificador único para cada elemento, garantizando que las llaves sean siempre únicas y estables.

### 7.3. Spreading properties on DOM elements

We usually spread the properties to the elements to avoid writing every single one manually, which is shown as follows:

```jsx
<Component {...props} />
```

However, when we spread properties into a DOM element, we run the risk of adding unknown HTML attributes, which is bad practice.

## 8. React Hooks

With Hooks, we can manage the state, handle side effects, and reuse code in a more concise and readable way

In this chapter, we will cover the following topics:

- The new React Hooks and how to use them
- The rules of the Hooks
- How to migrate a class component to React Hooks
- Understanding the component life cycle with Hooks and effects
- How to fetch data with Hooks
- How to memoize components, values, and functions with memo, useMemo, and useCallback
- How to implement useReducer

### 8.1. Using the State Hook

#### 8.1.1. Rules of Hooks

React Hooks are basically JavaScript functions, but there are two rules that you need to follow in order to use them.

React provides a linter plugin to enforce those rules for you, which you can install by running the following command:

`npm install --save-dev eslint-plugin-react-hooks`

- **Rule 1: Only call Hooks at the top level**: To ensure the proper functioning of React Hooks, it is important to avoid calling them inside loops, conditions, or nested functions

- **Rule 2: Only call Hooks from React functions**

Se muestra un componente de tipo clase que hace un fetch y luego re-escrito utilizando el useEffect, useLayoutEffect, useCallback, useMemo, and memo. Cada uno de estos hooks estan explicados mejor en el repositorio principal.

- I have a rule when it comes to establishing whether it is a good idea to use memo, and this rule is straightforward: just don’t use it. Normally, when we have small components or basic logic, we don’t need this unless you’re working with large data from some API, your component needs to perform a lot of renders (normally huge lists), or when you  notice that your app is going slow. Only in that case would I recommend using memo.

Para entender mejor los tres hooks que ayudan a que cuando se hacen side effect, estas tres ayuden a que diferentes componetnes que se comparten infomacion entre si no se re-renderizen solo por que estan pasando informacio o deifiniendo funciones.

- **memo:**
  - Memoizes a component
  - Re-memoizes when props change
  - Avoids re-renders

- **useMemo:**
  - Memoizes a calculated value
  - For computed properties
  - For heavy processes
  
- **useCallback:**
  - Memoizes a function definition to avoid redefining it on each render
  - Use it whenever a function is passed as an effect argument
  - Use it whenever a function is passed by props to a memoized component

And finally, do not forget the golden rule: Do not use them until absolutely necessary.

#### 3.1.2. useReducer Hook

La explicacion de este libro es satisfactoria pero una informacion mejor esta en el repositorio de gridder.
