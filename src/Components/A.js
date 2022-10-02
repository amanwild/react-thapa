import React from "react";
import {fname,lname} from "../App";
function CreateNote(props) {
  
  return (
    <>
      <fname.Consumer>
      {(fname)=>{
        return(<lname.Consumer>
        {(lname)=>{
          return(<>
          <h2>This is My  {fname} {lname}</h2>

          </>)
        }}
        </lname.Consumer>)
      }}

      </fname.Consumer>
    </>
  );
}

export default CreateNote;
