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
    const center = {
      lat: this.props.latitude,
      lng: this.props.longitude
    }

    const mapOptions = {
      styles: [
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            },
            {
              saturation: '-72'
            },
            {
              gamma: '0.44'
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.government',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#3d2a2a'
            },
            {
              weight: '0.04'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.place_of_worship',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.school',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.school',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [
            {
              saturation: '61'
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'transit.station.bus',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            },
            {
              saturation: '51'
            },
            {
              hue: '#ff0000'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'all',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#a00c0c'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#730000'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#000000'
            }
          ]
        },
        {
          featureType: 'transit.station.rail',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [
            {
              visibility: 'on'
            },
            {
              saturation: '-84'
            },
            {
              lightness: '70'
            },
            {
              color: '#ad2828'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#4284aa'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [
            {
              saturation: '-61'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        }
      ]
    }

    return (
      <div>
        <div style={{ height: '90vh', width: '100%' }}>
          <CreateSpot lat={this.props.latitude} lng={this.props.longitude} />
          <GoogleMapReact
            bootstrapURLKeys={{
              key: GOOGLE_API_KEY
            }}
            defaultCenter={center}
            defaultZoom={15}
            options={mapOptions}
          >
            <UserLocation
              lat={this.props.latitude}
              lng={this.props.longitude}
              text={"You're here"}
            />
            {this.props.skateSpots.posts.map(skatespot => (
              <SkateSpot
                key={skatespot._id}
                skatespot={skatespot}
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
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { getSpots }
)(Map)
