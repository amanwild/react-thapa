import axios from "axios";
import React, { useEffect,useState } from "react";
const App = () => {
  const [num, setNum] = useState("")
  const [name, setName] = useState("")
  const [moves, setmoves] = useState("")
  
  
  useEffect(() => {
    //use to avoid cors Ristriction or error
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };

    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`,config)
      console.log("Name :",res.data.name)
      console.log("Moves :",res.data.moves.length)
      
      setName(res.data.name) 
      setmoves(res.data.moves.length)
    }    ;
    getData()
    // these num defines ,for What in change to run useEffect
  },[num]);

  return (
    <>
      <div className="container">
        <div>
          <h1> You Choose <span style={{color :"red"}}>{num}</span></h1>
          <h1> Name is  <span style={{color :"red"}}>{name}</span></h1>
          <h1> Have <span style={{color :"red"}}>{moves}</span> Moves</h1>
        </div>
        <select value={num} onChange={(event)=>{
          setNum(event.target.value);
        }}>
          <option value="" selected disabled hidden>Choose </option>
          <option value="1">1</option>
          <option value="25">25</option>
          <option value="3">3</option>
        </select>
      </div>
    </>
  );
};
export default App;
