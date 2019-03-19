import React, { Component } from 'react'
import './userLocation.css'

class UserLocation extends Component {
  render() {
    return (
      <div>
        <p className="userLocation">{this.props.text}</p>
      </div>
    )
  }
}

export default UserLocation
