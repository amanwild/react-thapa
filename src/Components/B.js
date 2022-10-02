import React, { useContext } from "react";
import { fname, lname } from "../App";
function B() {
  const first = useContext(fname);
  const second = useContext(lname);
  return (
    <>
      <h1>
        This is My {first} {second}
      </h1>
    </>
  );
}

export default B;
