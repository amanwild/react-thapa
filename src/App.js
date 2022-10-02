import React, { useEffect,useState } from "react";
const App = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)
    //it will run whenever page will render
    // var title = 'My Page Title'+{fir}
    useEffect(()=>{
        document.title = `Clicked ${first} Times`;
    },[first])//this list is be key of this useEffect
    const inc =()=>{
        setfirst(first+1)
    }
    const incc =()=>{
        setsecond(second+1)
    }
  return (
    <>
    <h1>{first}</h1>
    <button onClick={inc}>inc</button>
    <h1>{second}</h1>
    <button onClick={incc}>incc</button>
      
    </>
  );
};
export default App;
