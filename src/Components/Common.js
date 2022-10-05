import React from "react";
import { Link } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header"  className="  d-flex align-item-center">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="border-top-0 h4 p-2 rounded-4 border-light text-light col-md-6 p-lg-5 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 id="card" className="text-center border-2 my-4">
                    <strong className="brand-name">{props.name}</strong>
                  </h1>
                  <h4 id="card" className="my-3 ">
                    {props.message}
                  </h4>
                  <h2  className="text-center rounded-3  mt-3">
                    <Link to={props.btnurl}>
                      <h4 className="btn btn-success   my-sm-0">
                        {props.btn}
                      </h4>
                    </Link>
                  </h2>
                </div>

                <div className="border-top-0  h4 p-2 rounded-4 border-light text-light col-md-6 p-lg-5 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <img
                    id="card"
                    src={props.logo}
                    className="img-fluid mx-0 bg-dark h4  rounded-4 border-2 rounded-3 p-3"
                    alt="logo"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
