import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Components/logo.png";
//useHistory is changed in V6 to useNavigate

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <div id="NavBar" className="row">
        <nav
          style={{
            margin: "0px 0px 20px 0px",
            boxShadow: "1px 1px 15px blueviolet",
          }}
          className="navbar sticky-top  navbar-expand-md navbar-dark bg-dark p-0"
        >
          <div className="container-fluid text-center">
            <a className="navbar-brand mx-0" href="#">
              <img className="logo" width="50px" src={logo} />
            </a>
            <button
              className="navbar-toggler p-1 mx-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="fa fa-navicon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 ">
                  <NavLink className="nav-link " to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-2 ">
                  <NavLink className="nav-link" to="/search">
                    Search
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/user/aman">
                    User
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/contact/aman/sahu">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <button
              className="btn btn-outline-success px-0 mx-1"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
            <button
              className="btn btn-outline-success px-0  mx-1"
              onClick={() => navigate(1)}
            >
              Go forward
            </button> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
