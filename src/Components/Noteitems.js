import React from "react";

function Noteitems(props) {
    const click = () => {
        props.delNote(props.id);
        console.log(props.id,"On click");
      };
  return (
    <>
      <div className="col-sm-3">
        <div className="cards">
          <h5 className="text-light card-header">{props.title}</h5>
          <div id = "content">
          <span  className="text-light ">{props.content}</span>
          </div>
          <button className="btn btn-primary " onClick={click} type="button">
            Delete Note
          </button>
        </div>
      </div>
    </>
  );
}

export default Noteitems;
