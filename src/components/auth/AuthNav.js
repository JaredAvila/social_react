import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../navigation/navbar.css";

export default class AuthNav extends Component {
  render() {
    return (
      <div className="navbar">
        <div>
          <h1>
            <Link className="authNavLink" to="/">
              <span className="showcaseTxt">React</span>
              <span className="showcaseSecondary, authNavSecondary">
                Social
              </span>
            </Link>
          </h1>
        </div>
        <Link className="navLinks btn" to="/login">
          Login
        </Link>
        <Link className="navLinks btn" to="/register">
          Register
        </Link>
      </div>
    );
  }
}
