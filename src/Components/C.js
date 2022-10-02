import React,{useContext} from "react";
import { fname, lname } from "../App";
function Header() {
  const first = useContext(fname)
  const second = useContext(lname)
  return (
    <div className="navbar sticky-top navbar-dark bg-dark">
      <h1>
        My Name is {first} {second}
      </h1>
    </div>
  );
}

export default Header;
