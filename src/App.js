import React, { useState } from "react";
import Todolist from "./Components/Todolist";
const App = () => {
  const [initial, updated] = useState(""); //useState for array
  const [items, setitems] = useState([]); //useState for list
  const change = (event) => {
    updated(event.target.value);
  };
  const click = () => {
      if (initial == "") {
          console.log("Please enter Something");
        } else {
            setitems((olditems) => {
            return [...olditems, initial] });
            updated("");
      }
      return setitems;
    ;
  };
  const dlt = (id) => {
    console.log("deleted", id);
    setitems((olditems) => {
      return olditems.filter((array, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div>
      <div className="card">
        <h1>ToDo List</h1>
        <input type="text" value={initial} onChange={change}></input>
        <button onClick={click}> + </button>
        <div>
          {items.map((eachitem, index) => {
            return (
              <Todolist text={eachitem} id={index} key={index} onSelect={dlt} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
