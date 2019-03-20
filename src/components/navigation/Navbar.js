import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/add">New User</Link>
      </div>
    );
  }
}