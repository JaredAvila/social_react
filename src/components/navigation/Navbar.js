import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navLinks btn" to="/">
          Home
        </Link>
        <Link className="navLinks btn" to="/users">
          Users
        </Link>
        <Link className="navLinks btn" to="/add">
          New User
        </Link>
      </div>
    );
  }
}
