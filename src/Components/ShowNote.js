import React, { useState } from "react";
import Noteitems from "./Noteitems";
import CreateNote from "./CreateNote";

function ShowNote(props) {
  const [addnote, setaddnote] = useState([]);
  const addNote = (note) => {
    console.log(note);
    setaddnote((oldData) => {
      return [...oldData, note];
    });
  };
  const deleteNote = (id) => {
    console.log(id,"initialize to delete");
    setaddnote((oldData)=>
      oldData.filter((current,index)=>{
        return index!==id; 
      })
    )
    
    
  };
  return (
    <>
      <CreateNote passNote={addNote} />
      <div >
        <h1>Your Notes</h1>
        <div className="d-flex flex-row flex-wrap my-5">
          {addnote.map((element, index) => {
            return (
              <Noteitems
                key={index}
                id={index}
                title={element.title}
                content={element.content}
                delNote={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ShowNote;
