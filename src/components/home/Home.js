import React, { Component } from "react";
import { Link } from "react-router-dom";

//CSS
import "./home.css";
import "../../index.css";

//Components
import Navbar from "../navigation/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
