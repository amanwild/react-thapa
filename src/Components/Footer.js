import React from "react";
// import logo from "./logo.png"
function footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <>
      <footer className="fixed-bottom bg-dark text-center text-white" >
        CopyRights © Reserved {year}
      </footer>
      
    </>
  );
}

export default footer;
