import React, { Component } from 'react'
import './createSpot.css'
import { connect } from 'react-redux'
import { addNewSpot } from '../../../../redux_state/actions/addSpotAction'

class CreateSpot extends Component {
  constructor() {
    super()
    this.state = {}
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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div className="create_spot_form_contaier">
        <form onSubmit={this.onSubmit} className="create_spot_form">
          <input
            type="text"
            name="street"
            placeholder="Street address"
            onChange={this.onChange}
            className="create_spot_input"
            id="name"
            required
          />
          <input
            type="email"
            name="zip"
            placeholder="Zip code"
            onChange={this.onChange}
            className="create_spot_input"
            id="email"
            required
          />

          <div className="create_spot_btn_group">
            <button
              onClick={() => alert('cancel pressed')}
              className="cancel_spot"
            >
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
  { addNewSpot }
)(CreateSpot)
