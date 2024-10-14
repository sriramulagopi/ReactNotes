import { useState } from "react"

// export const Counter = function(){
//     const [count,setCount] = useState(0);
//     console.log(count,setCount)
//     const incre = function(){
//         setCount(count+1);
//     }
//     const decre = function(){
//         setCount(count-1);
//     }
//     return <div>
//         <h1>Count:</h1>
//         <b>{count}</b>
//         <button onClick={incre}>Increment</button>
//         <button onClick={decre}>Decrement</button>
//     </div>
// }
// import "./counter.css";
// export const Counter = function(){
//     const [count,setCount]=useState("ADD");
//     const [display,setDisplay] = useState("none");
//     const [background,setbackground]=useState("#fff");
//     const [color,setColor]=useState("green");
//     let firstTime;
//     if(count==="ADD"){
//         firstTime = function(){
//             setCount(1);
//             setDisplay("flex");
//             setbackground("#318616")
//             setColor("#fff")
//         }
//     }
//     const Incre = function(){
//         if(count===5){
//             alert("You can't more than 5")
//             return
//         }
//         setCount(count+1);
//     }
//     const Decre = function(){
//         setCount(count-1);
//         if(count===1){
//             setDisplay("none");
//             setCount("ADD");
//         }
//     }
//     return <div className="counter" onClick={firstTime} style={{background:background,color:color}}>
//         <span  style={{display:display}} onClick={Decre}>-</span>
//         <span>{count}</span>
//         <span  style={{display:display}} onClick={Incre}>+</span>
//     </div>
// }