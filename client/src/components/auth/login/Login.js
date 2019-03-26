import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'
import { loginUser } from '../../../redux_state/actions/authActions'

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
    this.props.loginUser(userData)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="login_form">
        <input
          type="email"
          name="email"
          onChange={this.onChange}
          className="login_email_input"
          placeholder="email"
          id="email"
          required
        />
        <input
          type="password"
          name="password"
          onChange={this.onChange}
          className="login_password_input"
          placeholder="password"
          id="password"
          required
        />
        <div className="login_btn_group">
          <button type="submit" className="login_submit_btn">
            Login
          </button>
          <button
            type="button"
            className="signup_link_btn"
            onClick={() => this.props.changeWindow()}
          >
            Sign Up
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
