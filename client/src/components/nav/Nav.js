import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
  render() {
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
              <a href="/" className="navigation__link">
                Profile
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                Post Feed
              </a>
            </li>
            <li className="navigation__item">
              <a href="/signup" className="navigation__link">
                Sign Up
              </a>
            </li>
            <li className="navigation__item">
              <a href="/login" className="navigation__link">
                Log in
              </a>
            </li>
            <li className="navigation__item">
              <a href="/" className="navigation__link">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav
