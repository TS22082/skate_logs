import React, { Component } from 'react'
import './spotDetails.css'

class SpotDetails extends Component {
  render() {
    const { name, street, zip, likes, comments } = this.props.spot
    return (
      <div className="spot_details">
        <div className="details_header">
          <h1>{name}</h1>
          <h1>
            {street}, {zip}
          </h1>
          <div className="likes_container">
            <h3 className="likes_counter">{likes.length} likes</h3>
            <button
              onClick={() => alert('does nothing yet')}
              className="likes_btn"
            >
              +
            </button>
          </div>
        </div>
        <h1>{comments.length} comments</h1>
      </div>
    )
  }
}

export default SpotDetails
