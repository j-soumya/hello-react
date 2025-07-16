import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles it to React.createElement => React Element - JS Object => renders as HTML element in the browser, 
// () for multiline JSX
const number = 10;
// React Element, name can start with small letter, it will be treated as a normal HTML element
// React.createElement is used to create a React Element, it takes three arguments: type, props, children
// type is the type of element, props is an object containing the attributes of the element, children is the content of the element
const jsxHeading = (<h1 className="heading">
    {number}
    Hello World from JSX!</h1>);

// React Functional Component, different ways to create a functional component
// Functional Component is a normal JavaScript function that returns a React Element/ JSX
// name should start with capital letter, otherwise it will be treated as a normal HTML element
// 1. Using function declaration

const HeadingComponent = () => {
    return <h1>Namaste React Functional Component 1</h1>
}


// 2. Using arrow function
const HeadingComponent2 = () => (
    <div id="container">
        
        {HeadingComponent()}
        <HeadingComponent />
     <h1 className="heading">Namaste React Functional Component 2</h1>
     </div>
)
// 3. Using arrow function with implicit return
// This is the most concise way to write a functional component
const HeadingComponent3 = () => <h1>Namaste React Functional Component!</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2 />);


