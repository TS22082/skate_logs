import React, { Component } from 'react'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(userData)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="email"
          name="email"
          onChange={this.onChange}
          className="emailInput"
          placeholder="email"
          id="email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={this.onChange}
          className="passwordInput"
          placeholder="password"
          id="password"
          required
        />
        <div className="btnGroup">
          <button type="submit" className="btn btnLogin">
            Login
          </button>
          <button
            className="signupBtn"
            onClick={() => this.props.changeWindow()}
          >
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

export default Login
