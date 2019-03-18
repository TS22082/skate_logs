import React, { Component } from 'react'
import SkateSpot from './skate_spot/SkateSpot'
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
            defaultZoom={11}
          >
            <SkateSpot lat={this.props.latitude} lng={this.props.longitude} />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}
