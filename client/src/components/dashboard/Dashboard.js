import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'
import Nav from '../nav/Nav'
import Map from './map/Map'

class Dashboard extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  constructor() {
    super()
    this.state = {
      longitude: '',
      latitude: ''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      })
    })
  }

  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        <Nav />
        <Map longitude={this.state.longitude} latitude={this.state.latitude} />
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
  userDecisionTimeout: 5000,
  watchPosition: true
})(Dashboard)
