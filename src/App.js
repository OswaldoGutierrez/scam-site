import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="github-icon.jpg"></img>
          <h1>Sign in to GitHub</h1>
        </div>

        <div className="center">
          <p>Username or email address</p>
          <input></input>
          <p>Password</p>
          <a href="">Forgot password?</a>
          <input></input>
          <button className="btn" type="submit">
            Sign in
          </button>
        </div>

        <div className="footer">
          <p>New to GitHub? </p>
          <a href="">Create an account.</a>
        </div>
      </div>
    );
  }
}

export default App;
