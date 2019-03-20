import React, { Component } from "react";

import User from "./User";
import Navbar from "../navigation/Navbar";

export default class Users extends Component {
  render() {
    let users;
    if (this.props.users) {
      users = this.props.users.map(user => {
        return <User key={user.id} user={user} />;
      });
    }
    return (
      <div>
        <Navbar />
        <div className="users">
          <h3 className="header">Our Users</h3>
          {users}
        </div>
      </div>
    );
  }
}
