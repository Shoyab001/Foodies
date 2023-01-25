import React from "react";
import "./Navbar.css";

const Navbar=()=> {
  const dish=(e)=>{
    e.preventDefault()
    window.scrollTo(650,650)
  }

  const Menu=(e)=>{
    e.preventDefault()
    window.scrollTo(2200,2200)
  }

  const Chef=(e)=>{
    e.preventDefault()
    window.scrollTo(2850,2850)
  }

  const Blog=(e)=>{
    e.preventDefault()
    window.scrollTo(3540,3540)
  }

  const Contact=(e)=>{
    e.preventDefault()
    window.scrollTo(4000,4000)
  }
 
  
    return (
      <nav className="navbar navbar-expand-lg sticky">
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
                <a className="nav-link mainhead" href="" onClick={(e)=>{dish(e)}}>
                  Dish
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mainhead" href="" onClick={(e)=>{Menu(e)}}>
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#" onClick={(e)=>{Chef(e)}}>
                  Chef
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#" onClick={(e)=>{Blog(e)}}>
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mainhead" href="#" onClick={(e)=>{Contact(e)}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }


export default Navbar;
