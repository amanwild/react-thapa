import React from "react";
import logo3 from "../Components/logo3.png";
import Card from "./Card";
import Sdata from "./Sdata";
import Common from "./Common";
const Services = () => {
  return (
    <>
      <div className="my-3">
        <h1 id="card" className="text-center border-2 my-4">
          <strong className="brand-name">Our Services</strong>
        </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((obj,index)=>{
                return (
                  <Card 
                  key={index}
                    imgsrc={obj.imgsrc}
                    title={obj.title}
                    btnname={obj.btnname}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Services;
