import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-2 mb-lg-0">
              <li className="nav-item  mx-2" >
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}

              {/* after "http://localhost:3000/user" type "/aman" */}

              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
              <li className="nav-item mx-2" >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item mx-2" >
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
