# React 18 Design Patterns and Best Practices

## Chapter 01, Taking Your First Steps with React

- **Differentiating between declarative and imperative programming:**

- One of the reasons why React is so powerful is that it enforces a declarative programming paradigm.
- La programación declarativa tiende a evitar la creación y mutación de un estado.

### 1.1. Unlearning everything

Templates engines como Mustache puede que de cierta sensacion de separacion de responsabilidades pero a la final javascript y HTML trabajan muy juntos, REACT ayuda en este sentido

### 1.2. Understanding JavaScript fatigue

Se tiene la misconcepcion de que react es muy grande, sin embargo es una libreria pequeña.

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

### Git Hooks

To avoid having unlinted code in our repository, what we can do is add ESLint at one point of our process using Git Hooks.

### Functional programming

FP principles, such as **immutability**, **pure functions**, and **higher-order functions**, **Currying**, **Composition** can help us write more maintainable and testable code.

- Higher-order functions, which take functions as arguments and/or return functions as output, can help us create more modular and reusable code.

#### Currying (pagina 56)

Currying is the process of converting a function that takes multiple arguments into a function one argument at a time and returning another function.

#### Higher Order Functions

HoFs are functions that take a function as a parameter, and optionally some other parameters, and return a function. The returned function is usually enhanced with some special behaviors.

```javascript
const add = (x, y) => x + y
const log = fn => (...args) => { 
 return fn(...args)
}
const logAdd = log(add)
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
const withClassName = Component => props => (
 <Component {...props} className="my-class" />
)
```

- In the React community, it’s common to use the with prefix for HOCs.
