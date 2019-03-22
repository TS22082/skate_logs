import React, { Component } from 'react'
import SkateSpot from './skate_spot/SkateSpot'
import UserLocation from './user_location/UserLocation'
import GoogleMapReact from 'google-map-react'
import GOOGLE_API_KEY from './../../../google_map'
import CreateSpot from './create_spot/CreateSpot'
import { connect } from 'react-redux'

class Map extends Component {
  componentDidMount() {
    console.log(this.props.locationData.locationData)
  }

  render() {
    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude
    }

    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <CreateSpot lat={this.props.latitude} lng={this.props.longitude} />
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
            {this.props.locationData.locationData.map(skatespot => (
              <SkateSpot
                lat={skatespot.latitude}
                lng={skatespot.longitude}
                text={skatespot.name}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationData: state.locationData
})

export default connect(mapStateToProps)(Map)
