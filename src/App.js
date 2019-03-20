import React, { Component } from "react";

//Component Imports
import Users from "./components/users/Users";

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
  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState({ users }, () => console.log(this.state.users));
      });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="App">
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
