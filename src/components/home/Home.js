import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../navigation/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Home Component
        <Link to="/users">View Our Users</Link>
      </div>
    );
  }
}
