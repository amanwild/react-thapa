import React from "react";
import { Link } from "react-router-dom";
//useHistory is changed in V6 to useNavigate

import {useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
    console.log(navigate)

  return (
    <div>
      <nav style={{ margin: "0px 0px 20px 0px", boxShadow: "1px 1px 15px blueviolet"
 }} className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active" >
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* after "http://localhost:3000/user" type "/aman" */}

              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/user/aman">
                  User
                </Link>
              </li>

              {/* after "http://localhost:3000/user" type "/aman/sahu" */}
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/contact/aman/sahu">
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
            </ul>

            {/* //navigate(-1) is use to go back to previous page */}

            <button className="btn btn-outline-success mx-2 my-2 my-sm-0" onClick={() => navigate(-1)}>Go back</button>
            <button className="btn btn-outline-success mx-2  my-sm-0" onClick={() => navigate(1)}>Go forward</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
