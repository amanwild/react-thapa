import React from "react";

const Todolist = (props) => {
    // const dlt=()=>{
    //     console.log("deleted")
    // }
  return (
    <>
      <button className="delete" onClick={()=>{
        props.onSelect(props.id); 
        } }> # </button>
      <li>{props.text}</li>
    </>
  );
};
export default Todolist;
