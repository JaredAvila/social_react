import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/usersActions";

//components
import User from "./User";
import AuthNav from "../auth/AuthNav";

//stylesheets
import "../../index.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componen;

  render() {
    let { users } = this.props.users;
    let usersItems;
    if (users.length > 0) {
      usersItems = users.map(user => {
        return <User key={user.id} user={user} />;
      });
    } else {
      usersItems = <h1>No users...</h1>;
    }

    return (
      <div>
        <AuthNav />
        <div className="users">
          <h3 className="header">Our Users</h3>
          {usersItems}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
