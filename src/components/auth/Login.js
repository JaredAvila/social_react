import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addUser, getAllUsers } from "../../actions/usersActions";

import AuthNav from "./AuthNav";

import "./auth.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {},
      users: []
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  handleSubmit(e) {
    this.setState(
      {
        newUser: {
          name: this.refs.name.value,
          username: this.refs.userName.value,
          website: this.refs.website.value,
          email: this.refs.email.value,
          phone: this.refs.phone.value,
          address: {
            street: this.refs.street.value,
            suite: this.refs.suite.value,
            city: this.refs.city.value,
            zipcode: this.refs.zipcode.value
          },
          company: {
            name: this.refs.coName.value,
            bs: this.refs.bs.value,
            catchPhrase: this.refs.catchPhrase.value
          }
        }
      },
      () => {
        console.log(this.state.newUser);
        this.props.addUser(this.state.newUser);
      }
    );
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <AuthNav />
        <div className="loginContainer container">
          <div className="loginFormDiv">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label htmlFor="userName">
                Username:
                <input type="text" ref="userName" />
              </label>
              <label htmlFor="password">
                Password:
                <input type="password" ref="password" />
              </label>
              <input type="submit" value="Submit" className="btn" />
            </form>
          </div>
          <div className="addText">
            <h3>Log Yourself In</h3>
            <h5>to our ever growing community</h5>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { addUser, getAllUsers }
)(Login);
