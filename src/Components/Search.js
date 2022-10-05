import React, { useState } from "react";
import Sresult from "./Sresult";
const Search = () => {
  const [key, setkey] = useState("");
  const changed = (event) => {
    var data = event.target.value;
    console.log(data);
    setkey(data);
  };
  return (
    <>
      <div className="my-3">
        <h1 id="card" className="text-center border-2 my-4">
          <strong className="brand-name"> Welcome to Search Menu</strong>
        </h1>
      </div>
      <div className="container my-5">
        <div className="text-center   my-4 ">
          <input
            className=" border-top-0  bg-dark h4 p-2 rounded-4 border-light text-light"
            type="text"
            onChange={changed}
            value={key}
          ></input>
        </div>
        
        {key === "" ? null : <Sresult name={key} />}
        </div>
    </>
  );
};

export default Search;
