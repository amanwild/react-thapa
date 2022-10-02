import React,{useContext} from "react";
import { fname, lname } from "../App";
function CreateNote() {
  const fnameval = useContext(fname)
  const lnameval = useContext(lname)
  return (
    <>
      <h2>
        This is My {fnameval} {lnameval}
      </h2>
    </>
  );
}

export default CreateNote;
