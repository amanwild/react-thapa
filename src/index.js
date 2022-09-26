import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const w = " World";
const b = "Byebye ";
root.render(
    <>
    {/* Template literals */}
    <h1>{`Welcome to My ${w}!!`}</h1>
    <h1>{`${10 + 10} is expression!!`}</h1>
    <h1>
      {`${b} ${w} `}
    </h1>
  </>
);
