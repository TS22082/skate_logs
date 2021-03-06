import React, { Component } from 'react'
import Geocode from 'react-geocode'
import './createSpot.css'
import { connect } from 'react-redux'
import GOOGLE_API_KEY from './../../../../google_map'
import addImg from './add.png'
import {
  addNewSpot,
  hideNewSpotForm,
  showNewAddSpotForm
} from '../../../../redux_state/actions/spotActions'

Geocode.setApiKey(GOOGLE_API_KEY)
class CreateSpot extends Component {
  componentDidMount() {
    Geocode.fromLatLng(this.props.lat, this.props.lng).then(
      response => {
        const location = response.results[0]

        const locationNum = location.address_components[0].long_name
        const locationStreet = location.address_components[1].long_name
        const locationZip = location.address_components[6].long_name
        this.setState({ locationNum, locationStreet, locationZip })
      },
      error => {
        console.error(error)
      }
    )
  }

  constructor() {
    super()
    this.state = {}
    this.setToHide = this.setToHide.bind(this)
    this.setToShow = this.setToShow.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    const skatePark = {
      name: this.state.name,
      street: this.state.street,
      zip: this.state.zip,
      longitude: '',
      latitude: ''
    }
    Geocode.fromAddress(`${skatePark.street} ${skatePark.zip}`).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location
        skatePark.longitude = lng
        skatePark.latitude = lat
        this.props.addNewSpot(skatePark)
      },
      error => {
        console.error(error)
      }
    )
    this.setToHide(e)
  }

  setToHide(e) {
    e.preventDefault()
    this.props.hideNewSpotForm()
  }

  setToShow(e) {
    e.preventDefault()
    this.props.showNewAddSpotForm()
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return !this.props.skateSpots.showNewSpotForm ? (
      <img
        src={addImg}
        className="create_skate_spot_btn"
        alt="Add"
        onClick={this.setToShow}
      />
    ) : (
      <div className="create_spot_form_contaier">
        <form
          onSubmit={this.onSubmit}
          className="create_spot_form"
          id="new_spot_form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
            className="create_spot_input"
            id="name"
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            onChange={this.onChange}
            className="create_spot_input"
            id="street"
            defaultValue={
              this.state.locationNum + ' ' + this.state.locationStreet
            }
          />
          <input
            type="number"
            name="zip"
            placeholder="Zip Code"
            onChange={this.onChange}
            className="create_spot_input"
            id="zip"
            defaultValue={this.state.locationZip}
          />
          <div className="create_spot_btn_group">
            <button
              type="button"
              onClick={this.setToHide}
              className="cancel_spot"
            >
              Close
            </button>
            <input
              onClick={this.onSubmit}
              type="submit"
              value="Add Skate Spot"
              className="add_spot_submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  skateSpots: state.skateSpots
})

export default connect(
  mapStateToProps,
  { addNewSpot, hideNewSpotForm, showNewAddSpotForm }
)(CreateSpot)
