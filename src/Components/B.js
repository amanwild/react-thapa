import React from "react";
import {fname,lname} from "../App";
function footer() {
    
  return (
    <>
     <fname.Consumer>
      {(fname)=>{
        return(<lname.Consumer>
        {(lname)=>{
          return(<>

          <h1>This is My {fname}{lname}</h1>
          </>)
        }}
        </lname.Consumer>)
      }}
    </fname.Consumer>
    </>
  );
}

export default footer;
