import React, { useState } from "react";
// import Header from "./Header";
// import Calc from "./Calc";


const App=() => {
    var T =new Date().toLocaleTimeString();
    const state = useState();
    const [time,setTime]=useState(T);
    
    const incNum =()=>{
        var T =new Date().toLocaleTimeString();
    
        console.log(time);
        console.log("click");
        setTime(T)
    }
    return(
    <>
        <h1>{time}</h1>
        <button onClick={incNum}>Click Me</button>
    </>);
}
export default App;
