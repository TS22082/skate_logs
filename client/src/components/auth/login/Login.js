import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  render() {
    return (
      <form action="" className="form">
        <input
          type="email"
          className="emailInput"
          placeholder="email"
          id="email"
          required
        />
        <input
          type="password"
          className="passwordInput"
          placeholder="password"
          id="password"
          required
        />
        <div className="btnGroup">
          <button
            className="signupBtn"
            onClick={() => this.props.changeWindow()}
          >
            Sign Up
          </button>
          <button className="btn btnLogin">Login</button>
        </div>
      </form>
    )
  }
}

export default Login
