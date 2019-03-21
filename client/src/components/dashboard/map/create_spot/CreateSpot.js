import React, { Component } from 'react'
import './createSpot.css'
import { connect } from 'react-redux'
import {
  addNewSpot,
  hideNewSpotForm
} from '../../../../redux_state/actions/spotActions'

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
      street: this.state.street,
      zip: this.state.zip
    }
    this.props.addNewSpot(skatePark)
    console.log(this.props)
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
        <form className="create_spot_form">
          <input
            type="text"
            name="street"
            placeholder="Street address"
            onChange={this.onChange}
            className="create_spot_input"
            id="name"
          />
          <input
            type="number"
            name="zip"
            placeholder="Zip code"
            onChange={this.onChange}
            className="create_spot_input"
            id="email"
          />
          <div className="create_spot_btn_group">
            <button onClick={this.setToHide} className="cancel_spot">
              Cancel
            </button>
            <button onClick={this.onSubmit} className="add_spot_submit">
              Add Skate Spot
            </button>
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
