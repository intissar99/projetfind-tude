import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";


function NavbarAdmin() {
  return (
    <nav >
      <a href="#" className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </a>
      </nav>
  )
}

export default NavbarAdmin