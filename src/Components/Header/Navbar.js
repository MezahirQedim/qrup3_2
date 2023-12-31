import React from "react";
import {Link, useLocation} from "react-router-dom"
import { useContext } from 'react';
import { ThemeContext } from "../Context/ThemeContext";

const Navbar = ({naviqasiya}) => {

  const { setTest } = useContext(ThemeContext)


  const location = useLocation()



  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Second
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            {naviqasiya.map((item) => 
            
              <li class="nav-item"  style={{backgroundColor: location.pathname === item.path && "red"}}>
                <Link class="nav-link " to={item.path}>{item.name}</Link>
              </li>
            )}



            {/* <li class="nav-item">
              <Link class="nav-link" to="/home"> Home </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/service">Service</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/users">Users</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/form">Form</Link>
            </li> */}

          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>

            <button className="btn btn-success" 

              type="button"
              onClick={(e) => 
                 
                {
                  // e.preventDefault()
                  setTest("serdar")}
                }
                
                
                >Test</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
