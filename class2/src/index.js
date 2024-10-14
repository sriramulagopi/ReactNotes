import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(React);
// console.log(ReactDOM);
// const h1 = React.createElement("h1",{className:"header",id:"header"},"Welcome to React!");
// // root.render(h1);
// const p = React.createElement("p",{className:"para"},"Para text");
// const b = React.createElement("b",{className:"bold"},"Bold text");
// const div = React.createElement("div",{className:"container"},h1,p,b);
// root.render(div);

// React allows you to write jsx syntax, but later it will convert into javascript which was done babel compiler.
// const  container = (
//     <div id="container" className="container">
//         <h1>React Basics</h1>
//         <p className="para">Para text</p>
//         <b className="bold">Bold text</b>
//     </div>
// );
// root.render(container);


// funtions are not valid in react but if it returns jsx then its going to be valid.
// function func1(){
// }
// root.render(func1) 


// If function returns jsx then its going to be valid.
// function func2(){
//     return <div id="header" className="header">
//         <p className="para">Para text</p>
//         <b className="bold">Bold text</b>
//     </div>;
// }
// root.render(func2());

// Objects are also not valid in react;
// const obj = {Name:<h1>Gopi</h1>,Address:<b>Khammam</b>,Pincode:507003};
// root.render(obj);
// root.render(<div>
//     {obj.Name}
//     {obj.Address}
// </div>);
// root.render(obj.Pincode)

// Arrays are valid in react.
// const arr = [<h1>React Basics</h1>,<p>Para text</p>,<b>Bold text</b>]
// root.render(<div>
//     {arr}
// </div>)

// const obj = {Addres:"Khammam"}
// const Name = "Gopi";
// const bool = true;
// const bool2 = false;
// const container = (
//     <div>
//         <h1 className="header" id={obj.Addres}>{Name}</h1>
//         {bool && <p className="para">Para text</p>}
//         {bool2 && <b className="bold">Bold text</b>}
//         {bool ?<p>Para text2</p>:""}
//         <b>{undefined??"Bold text2"}</b>
//         <p>{"Para text3"??<b>Bold text</b>}</p>
//         <b>{obj.Addres.pincode?.state?.district}</b>{/* optional chaining */}
//     </div>
// )
// root.render(container)

