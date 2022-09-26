import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // React.Fragment is faster than div cause it dosn't craete extra div
//   <React.Fragment>
//     <h1>Hello !!</h1><h1>Welcome to My world!!</h1>
//   </React.Fragment>
//this is also syntax of react fragment
  <>
    <h1>Hello !!</h1><h1>Welcome to My world!!</h1>
  </>
);
