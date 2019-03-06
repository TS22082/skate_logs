import React, { Component } from 'react'
import './signup.css'

class Signup extends Component {
  render() {
    return (
      <div>
        <form action="" className="form">
          <input
            type="text"
            className="emailInput"
            placeholder="email"
            id="email"
            required
          />
          <input
            type="text"
            className="passwordInput"
            placeholder="choose strong password"
            id="password"
            required
          />
          <input
            type="text"
            className="passwordInput"
            placeholder="enter password again"
            id="password"
            required
          />
          <div className="btnGroup">
            <button
              className="signupBtn"
              onClick={() => this.props.changeWindow()}
            >
              Login
            </button>
            <button className="btn btnLogin">Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
