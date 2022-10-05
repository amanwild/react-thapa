import React from "react";
import { NavLink } from "react-router-dom";
import logo3 from "../Components/logo3.png";

const Card = (props) => {
  return (
    <>
     
            <div className=" text-center  col-md-4 col-10 mx-auto ">
              <div className="card text-center p-3" >
                <img style={{hight:"400px" }} className="card-img-top px-3 m-auto" src={props.imgsrc} alt="Card image cap" />
                <div className="card-body">
                  <h2 className="card-title text-center ">{props.title}</h2>
                  <p className="card-text text-center ">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <NavLink to="/" className=" btn btn-primary">
                    {props.btnname}
                  </NavLink>
                </div>
                </div>
              </div>
            
    </>
  );
};

export default Card;
