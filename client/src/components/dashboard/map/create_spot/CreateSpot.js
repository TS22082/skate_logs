import React, { Component } from 'react'
import Geocode from 'react-geocode'
import './createSpot.css'
import { connect } from 'react-redux'
import GOOGLE_API_KEY from './../../../../google_map'
import {
  addNewSpot,
  hideNewSpotForm
} from '../../../../redux_state/actions/spotActions'

Geocode.setApiKey(GOOGLE_API_KEY)
class CreateSpot extends Component {
  constructor() {
    super()
    this.state = {}
    this.setToHide = this.setToHide.bind(this)
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
  }

  setToHide(e) {
    e.preventDefault()
    this.props.hideNewSpotForm()
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return !this.props.locationData.showNewSpotForm ? null : (
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
          />
          <input
            type="number"
            name="zip"
            placeholder="Zip Code"
            onChange={this.onChange}
            className="create_spot_input"
            id="zip"
          />
          <div className="create_spot_btn_group">
            <button onClick={this.setToHide} className="cancel_spot">
              Close
            </button>
            <input
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
  locationData: state.locationData
})

export default connect(
  mapStateToProps,
  { addNewSpot, hideNewSpotForm }
)(CreateSpot)
