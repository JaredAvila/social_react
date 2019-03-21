import React, { Component } from "react";
import { Link } from "react-router-dom";

//CSS
import "./home.css";
import "../../index.css";

class Home extends Component {
  

  render() {
    return (
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
    );
  }
}

export default Home;
