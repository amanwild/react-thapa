import React, { useState } from "react";
// import Header from "./Header";
// import Calc from "./Calc";


const App=() => {
    var T =new Date().toLocaleTimeString();
    const state = useState();
    const [time,setTime]=useState(T);
    
    const update =()=>{
        T =new Date().toLocaleTimeString();
        setTime(T)
    }
    setInterval(update,1000);
    return(
    <>
        <h1 >{T}</h1>
    </>);
}
export default App;
