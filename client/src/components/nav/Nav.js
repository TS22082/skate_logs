import React, { Component } from 'react'
import './nav.css'
import { logoutUser } from '../../redux_state/actions/authActions'
import { connect } from 'react-redux'
import { clearCurrentProfile } from './../../redux_state/actions/profileActions'
import logout_img from './noun_log in_1697755.png'

class Nav extends Component {
  constructor() {
    super()
    this.state = {}
    this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return !this.props.auth.isAuthenticated ? null : (
      <nav className="skate_spot_nav">
        <h2 className="title">Skate Spot</h2>
        <img
          src={logout_img}
          alt="Logout"
          className="logout_btn"
          onClick={this.logout}
        />
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Nav)
