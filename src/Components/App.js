import React, { useState } from "react";
const App = () => {
  const state = useState();
  const [nameF, setNameF] = useState("");
  const [nameL, setNameL] = useState("");
  const [resfname, setfname] = useState("");
  const [reslname, setlname] = useState("");

  const setnameF = (event) => {
    setNameF(event.target.value);
  };
  const setnameL = (event) => {
    setNameL(event.target.value);
  };
  const result = (e) => {
    e.preventDefault();
    setfname(nameF);
    setlname(nameL);
  };
  return (
    <>
      <div>
      <form onSubmit={result}>
        <h1> Hello {resfname} {reslname}</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={setnameF}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={setnameL}
        />
        <button type="submit" >Click me</button>
        </form>
      </div>
    </>
  );
};
export default App;
