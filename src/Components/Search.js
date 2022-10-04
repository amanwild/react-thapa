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
      <div className="container ">
        <div style={{ margin: "80px 0px 0px 0px" }} className=" text-center  ">
          <h3 className="bg-dark text-light p-2 rounded-4 d-inline align-items-center text-center">
            Welcome to Search Menu
          </h3>
        </div>
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
