import React, { useState } from "react";

function CreateNote(props) {
  const [state, setState] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const expand =()=>{
    console.log(state,"State status")
    if(state!==true){
      setState(true)
    }else{
      setState(false)
    }
  }
  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((olddata) => {
        return {
            ...olddata,
            [name]: value,
        };
    });
    console.log(note,"On change")
};
const click = () => {
  props.passNote(note);
  console.log(note,"On click");
  setNote({title: "",
  content: "",})
};
  
  
  return (
    <>
      <form>
        <div className="card">
          <h5 onClick={expand} className="text-light ">
            Save your Secrete Notes Here
          </h5>
          {state &&
          <div className="input-group">
            <input
              value={note.title}
              name="title"
              onChange={inputEvent}
              className="input-group mb-3 "
              type="text"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter Your Title"
            ></input>
            <textarea
              value={note.content}
              name="content"
              onChange={inputEvent}
              placeholder="Enter Your Contetnt"
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>}
          {state &&<button onClick={click} className="btn btn-primary" type="button">
            Add Note
          </button>}
        </div>
      </form>
    </>
  );
}

export default CreateNote;
