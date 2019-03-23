import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import { getAllUsers } from "./actions/usersActions";

//Component Imports
import Users from "./components/users/Users";
import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

//Style Sheets
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  //Get all users from "DB"

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getAllUsers }
)(App);
