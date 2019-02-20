import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                Profile
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                Post Feed
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
                Sign In
              </a>
            </li>
            <li class="navigation__item">
              <a href="#" class="navigation__link">
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
