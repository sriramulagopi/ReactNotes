import { useState } from "react"
// const arr = ["Aravind","Rajesh"];
// export const App = function(){
//   const [index,setIndex]=useState(0);
//   const changeName = function(){
//     console.log("Before setIndex",index);
//     setIndex(index===0?1:0);
//     console.log("After setIndex",index)
//   }
//   return <div>
//     <div>{arr[index]}</div>
//     <button onClick={changeName}>changeName</button>
//   </div>
// }

// export const App = function(){
//     const [count,setCount]=useState(1);
//     const Incre = function(){
//         setCount(count+1);
//         setCount(count+2);
//         setCount(count-9);
//     }
//     return <div>
//         <h1>Count:</h1>
//         <b>{count}</b>
//         <button onClick={Incre}>Click</button>
//     </div>
// }

// export const App = function(){
//     const [state,setState]=useState({Name:"Gopi",Address:"Khammam"})
//     const changeName = function(){
//         state.Name="Asif";
//         setState({...state});
//     }
//     return <div>
//         <h1>{JSON.stringify(state)}</h1>
//         <button onClick={changeName}>Click</button>
//     </div>
// }

// export const App = function(){
//     const [state,setState]=useState("Asif");
//     const [state2,setState2]=useState("Gopi");
//     const onchange = function(e){
//         setState(e.target.value)
//     }
//     return <div>
//         <input type="text" value={state} onChange={onchange}/>
//         <input type="text" value={state2} onChange={(e)=>{setState2(e.target.value)}}/>
//     </div>
// }

export const App = function(){
    const [name1,setName1] = useState("");
    const [name2,setName2] = useState("");
    const [result,setResult] = useState("");
    const relation = function(){
        if(name1.length>3 && name2.length>3){
            let obj = {};
            let count = 0;
            let array = ["Siblings","Friends","Love","Affection","Marriage","Enemy"]
            for (let i=0;i<name1.length;i++){
                if(obj[name1[i]]){
                    obj[name1[i]]++;
                }
                else{
                    obj[name1[i]]=1
                }
            }
            for (let i=0;i<name2.length;i++){
                if(obj[name2[i]] && obj[name2[i]]>0){
                    count++;
                    obj[name2[i]]--;
                }
            }
            let len = ((name1.length+name2.length)-(count*2))%6;
            setResult(array[len])
        }
        else{
            alert("Name length should be greater than three")
        }
    }
    const clear = function(){
        setName1("");
        setName2("");
    }
    return <div className="conatiner">
        <input type="text" value={name1} onChange={e=>setName1(e.target.value)}/>
        <input type="text" value={name2} onChange={e=>setName2(e.target.value)}/>
        <button onClick={relation}>Find Relation</button>
        <button onClick={clear}>Clear</button>
        <h1>{result}</h1>
    </div>
}