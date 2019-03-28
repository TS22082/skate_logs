import React, { Component } from 'react'
import './nav.css'
import { logoutUser } from '../../redux_state/actions/authActions'
import { connect } from 'react-redux'
import { clearCurrentProfile } from './../../redux_state/actions/profileActions'
import { showNewAddSpotForm } from '../../redux_state/actions/spotActions'

class Nav extends Component {
  constructor() {
    super()
    this.state = {}
    this.showForm = this.showForm.bind(this)
    this.logout = this.logout.bind(this)
  }

  closeNav() {
    document.getElementById('navi-toggle').checked = false
  }

  showForm(e) {
    e.preventDefault()
    this.props.showNewAddSpotForm()
    this.closeNav()
  }

  toggleNavDisplay() {
    if (this.props.skateSpots.showNewSpotForm) {
      return null
    } else {
      return (
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="/dashboard" className="navigation__link">
                  Profile
                </a>
              </li>
              <li className="navigation__item">
                <a
                  href="/dashboard"
                  onClick={this.showForm}
                  className="navigation__link"
                >
                  New Skate Spot
                </a>
              </li>
              <li className="navigation__item">
                <a href="/dashboard" className="navigation__link">
                  Skate Map
                </a>
              </li>
              <li className="navigation__item">
                <a href="/" onClick={this.logout} className="navigation__link">
                  Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )
    }
  }

  logout(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return !this.props.auth.isAuthenticated ? null : this.toggleNavDisplay()
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, showNewAddSpotForm }
)(Nav)
