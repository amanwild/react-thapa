import React from "react";

const Sresult = (props) => {
  var url = `https://source.unsplash.com/900x400/?${props.name}`

  return (
    <>
      <div className="card"> 
      {/* UNSPLASH API 6cgTR9e_papEsMqI9_blK3oSxN3bo9CKVMn9_tANVNg */}
      <img className=" img-thumbnail" src={url} alt="imge"></img>
      </div>
    </>
  );
};

export default Sresult;
