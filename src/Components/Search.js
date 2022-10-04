import React, { useState } from "react";
import Sresult from "./Sresult";
const Search = () => {
  const [key, setkey] = useState("");
  const changed = (event) => {
    var data = event.target.value;
    console.log(data);
    setkey(data)
  };
  return (
    <>
      <div className="container"> 
      <h2 style={{ margin: "150px 0px 0px" }} className="text-center">
        Welcome to Search Menu
      </h2>
      <div>
      <input  className="card" type="text" onChange={changed} value={key}></input>
      </div> 
      {key===""?null:<Sresult name = {key}/>}
      </div>
    </>
  );
};

export default Search;
