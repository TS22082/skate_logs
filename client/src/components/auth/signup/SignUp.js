import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './signup.css'
import { registerUser } from '../../../redux_state/actions/authActions'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    console.log(newUser)
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={this.onChange}
            className="emailInput"
            id="naame"
            required
          />
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

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup))
