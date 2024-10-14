import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)


// Components:- A function with captial letter which returns a jsx is called as a functional Component.
// Note:- render accepts only jsx.

// root.render(<>
// <App a={0} b={1}/>
// {element({a:1,b:1})}
// </>);// All props will store into single object.