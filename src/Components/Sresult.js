import React from "react";

const Sresult = (props) => {
  var url = `https://source.unsplash.com/500x300/?${props.name}`

  return (
    <div className=" my-3">
      <div className="card "> 
      {/* UNSPLASH API 6cgTR9e_papEsMqI9_blK3oSxN3bo9CKVMn9_tANVNg */}
      <img className=" rounded-3 shadow-lg" src={url} alt="imge"></img>
      </div>
      </div>
  );
};

export default Sresult;
