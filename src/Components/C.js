import React from "react";
import {fname,lname} from "../App";
function Header() {
  return <div className="navbar sticky-top navbar-dark bg-dark">
    <fname.Consumer>
      {(fname)=>{
        return(<lname.Consumer>
        {(lname)=>{
          return(<>
            <h1> My Name is {fname} {lname}</h1>
          </>)
        }}
        </lname.Consumer>)
      }}
    </fname.Consumer>
  </div>;
}

export default Header;
