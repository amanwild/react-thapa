import React from "react"
import Add from "./Operations/Add";
import Division from "./Operations/Division";
import Multilication from "./Operations/Multiplication";
import Sub from "./Operations/Sub";

function Calc(){
    return(
    <>
         <h3>{`Facilities of this is world!!`}</h3>
    <ol>
        <li>Sum of Two no is :{Add(10,20)}</li>
        <li>Sub of Two no is :{Sub(10,20)}</li>
        <li>Multilication of Two no is :{Multilication(10,20)}</li>
        <li>Division of Two no is :{Division(10,20)}</li>
    </ol>
    </>);
}
export default Calc

