import React, { Component } from 'react'
import './login.css'

class Login extends Component {
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
            type="password"
            className="passwordInput"
            placeholder="password"
            id="password"
            required
          />
          <div className="btnGroup">
            <a href="#popup" className="signupBtn">
              Sign up
            </a>
            <button className="btn btnLogin">Login</button>
          </div>
        </form>

        <div className="popup" id="popup">
          <div className="popup__content">
            <div className="popup__left">
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className="popup__right">
              <a href="/" className="popup__close">
                &times;
              </a>
              <textarea rows="4" cols="50" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
