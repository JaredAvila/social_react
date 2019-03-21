import React, { Component } from "react";

//Component Imports
import Users from "./components/users/Users";
import AddUser from "./components/addUser/AddUser";

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

  addUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({ users });
  }

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
        <AddUser addUser={this.addUser.bind(this)} />
      </div>
    );
  }
}

export default App;
