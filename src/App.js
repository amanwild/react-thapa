import React, { createContext } from "react";
import C from "./Components/C";
import B from "./Components/B";
import A from "./Components/A";
const fname = createContext(); 
const lname = createContext();
const App = () => {
  return (
    <>
      <fname.Provider value={"Aman"}>
      <lname.Provider value={"Sahu"}>
        <A/>
        <B/>
        <C/>
      </lname.Provider>
      </fname.Provider>
    </>
  );
};
export default App;
export {fname,lname};
