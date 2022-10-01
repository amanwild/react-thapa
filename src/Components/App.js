import React, { useState } from "react";
// import Header from "./Header";
// import Calc from "./Calc";


const App=() => {
    const state = useState();
    const [count,setCount]=useState(0);
    
    const incNum =()=>{
    
        console.log(count);
        console.log("click");
        setCount(count+1)
    }
    return(
    <>
        <h1>{count}</h1>
        <button onClick={incNum}>Click Me</button>
    </>);
}
export default App;
