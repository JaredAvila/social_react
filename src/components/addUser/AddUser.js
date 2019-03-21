import React, { Component } from "react";

import "./addUser.css";

export default class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      newUser: {}
    };
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
        this.props.addUser(this.state.newUser);
      }
    );
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="addText">
          <h3>Add A New User</h3>
          <h5>to our ever growing community</h5>
        </div>
        <div className="formDiv">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="name">
              Name:
              <input type="text" ref="name" />
            </label>
            <label htmlFor="userName">
              User Name:
              <input type="text" ref="userName" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" ref="email" />
            </label>
            <label htmlFor="website">
              Website:
              <input type="text" ref="website" />
            </label>
            <label htmlFor="phone">
              Phone #:
              <input type="text" ref="phone" />
            </label>
            <label htmlFor="address">
              <br />
              Address:
              <div className="street">
                <label htmlFor="street">
                  Line 1:
                  <input type="text" ref="street" />
                </label>
                <label htmlFor="suite">
                  Suite #:
                  <input className="suite" type="text" ref="suite" />
                </label>
              </div>
            </label>
            <label htmlFor="city">
              City:
              <input type="text" ref="city" />
            </label>
            <label htmlFor="zipcode">
              Zipcode:
              <input type="text" ref="zipcode" />
            </label>
            <br />
            <label htmlFor="company" className="coName">
              Current Company:
            </label>
            <label htmlFor="coName">
              Name:
              <input type="text" ref="coName" />
            </label>
            <label htmlFor="catchPhrase">
              Motto:
              <input type="text" ref="catchPhrase" />
            </label>
            <label htmlFor="bs">
              Description:
              <input type="text" ref="bs" />
            </label>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    );
  }
}
