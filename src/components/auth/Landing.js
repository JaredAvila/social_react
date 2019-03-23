import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import AuthNav from "./AuthNav";

//stylesheets
import "./landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <AuthNav />
        <div className="home">
          <div className="showcase">
            <h1>
              Welcome to
              <br /> <span className="showcaseTxt">React</span>
              <span className="showcaseSecondary">Social</span>
            </h1>
            <Link className="btn" to="/users">
              View Our Users
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
