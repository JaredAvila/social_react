import React, { Component } from "react";
import "./users.css";

export default class User extends Component {
  render() {
    let user = this.props.user;
    return (
      <div>
        <div className="user">
          <div className="userInfo">
            <h3>{user.name}</h3>
            <p>
              <strong>Username:</strong>{" "}
              <em>
                <span className="userName">{user.username}</span>
              </em>
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Phone#:</strong> {user.phone}
            </p>
            <div>
              <p>
                <strong>Address:</strong>
              </p>
              <div className="address">
                <p>
                  {user.address.street} {user.address.suite}
                </p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
              </div>
            </div>
          </div>
          <div className="companyInfo">
            <p>
              <strong>Company:</strong>
            </p>
            <div className="company">
              <header>
                <h4>{user.company.name}</h4>
                <em>
                  <span className="catchPhrase">
                    {user.company.catchPhrase}
                  </span>
                </em>
              </header>
              <p>
                <strong>What we do:</strong> {user.company.bs}
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
