import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./mlogo.png" alt="" className="imglogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active mainhead"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#">
                  Dish
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#">
                  Chief
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mainhead"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item mainhead" href="#">
                      Generic
                    </a>
                  </li>
                  <hr />
                  <li>
                    <a className="dropdown-item mainhead" href="#">
                      Elements
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
