import React, { Component } from 'react'
import SkateSpot from './skate_spot/SkateSpot'
import UserLocation from './user_location/UserLocation'
import GoogleMapReact from 'google-map-react'
import GOOGLE_API_KEY from './../../../google_map'

export default class Map extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude
    }

    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            defaultCenter={center}
            defaultZoom={14}
          >
            <UserLocation
              lat={this.props.latitude}
              lng={this.props.longitude}
              text={"You're here"}
            />
            <SkateSpot lat={37.881101} lng={-122.3046675} text={'Skate Spot'} />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
