import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Actions
import { getAllUsers } from "./actions/usersActions";

//Component Imports
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import AddUser from "./components/addUser/AddUser";
import Navbar from "./components/navigation/Navbar";

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
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/add" component={AddUser} />
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
