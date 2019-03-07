import React, { Component } from 'react'
import './signup.css'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      password2: ''
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
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(userData)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.onChange}
            className="emailInput"
            id="email"
            required
          />
          <input
            type="text"
            name="password"
            placeholder="choose strong password"
            onChange={this.onChange}
            className="passwordInput"
            id="password"
            required
          />
          <input
            type="text"
            name="password2"
            placeholder="enter password again"
            onChange={this.onChange}
            className="passwordInput"
            id="password2"
            required
          />
          <div className="btnGroup">
            <button type="submit" className="btn btnLogin">
              Sign Up
            </button>
            <button
              className="signupBtn"
              onClick={() => this.props.changeWindow()}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
