import React, { useState } from "react";

const Sresult = (props) => {
  var url = `https://source.unsplash.com/900x400/?${props.name}`

  return (
    <>
      <div className="card"> 
      {/* UNSPLASH API 6cgTR9e_papEsMqI9_blK3oSxN3bo9CKVMn9_tANVNg */}
      <img src={url} alt="image"></img>
      </div>
    </>
  );
};

export default Sresult;
