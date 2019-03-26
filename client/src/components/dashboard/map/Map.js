import React, { Component } from 'react'
import SkateSpot from './skate_spot/SkateSpot'
import UserLocation from './user_location/UserLocation'
import GoogleMapReact from 'google-map-react'
import GOOGLE_API_KEY from './../../../google_map'
import CreateSpot from './create_spot/CreateSpot'
import { connect } from 'react-redux'
import { getSpots } from '../../../redux_state/actions/spotActions'

class Map extends Component {
  componentDidMount() {
    this.props.getSpots()
  }

  render() {
    console.log(this.props.locationData.posts)

    const { posts } = this.props.locationData.posts
    let postContent

    if (posts === null) {
      postContent = <h1>none</h1>
    } else {
      postContent = <h1>FOUND</h1>
    }

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
            {this.props.locationData.posts.map(skatespot => (
              <SkateSpot
                lat={skatespot.latitude}
                lng={skatespot.longitude}
                text={'SK8'}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  locationData: state.locationData,
  post: state.post
})

export default connect(
  mapStateToProps,
  { getSpots }
)(Map)
