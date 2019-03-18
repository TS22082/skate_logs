import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'
import Nav from '../nav/Nav'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      longitude: '',
      latitude: ''
    }
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <Nav />
        <p>latitude: {this.props.coords.latitude}</p>
        <p>longitude: {this.props.coords.longitude}</p>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Dashboard)
