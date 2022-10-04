import React from "react";
import { Link } from "react-router-dom";
//useHistory is changed in V6 to useNavigate

import {useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
    console.log(navigate)

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item  mx-2" >
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}

              {/* after "http://localhost:3000/user" type "/aman" */}

              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li> */}
              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li> */}
              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li> */}
            </ul>

            {/* //navigate(-1) is use to go back to previous page */}

            <button onClick={() => navigate(-1)}>Go back</button><button onClick={() => navigate(1)}>Go forward</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
