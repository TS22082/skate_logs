import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './signup.css'
import { registerUser } from '../../../redux_state/actions/authActions'

class Signup extends Component {
  constructor() {
    super()
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
    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="signup_form">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            onChange={this.onChange}
            className="signup_email_input"
            id="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={this.onChange}
            className="signup_email_input"
            id="email"
            required
          />
          <input
            type="text"
            name="password"
            placeholder="choose strong password"
            onChange={this.onChange}
            className="signup_password_input"
            id="password"
            required
          />
          <input
            type="text"
            name="password2"
            placeholder="enter password again"
            onChange={this.onChange}
            className="signup_password_input"
            id="password2"
            required
          />
          <div className="signup_btn_group">
            <button type="submit" className="signup_submit_btn">
              Sign Up
            </button>
            <button
              type="button"
              className="login_link_btn"
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

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup))
