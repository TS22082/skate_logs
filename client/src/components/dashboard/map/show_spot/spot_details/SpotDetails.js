import React, { Component } from 'react'

class SpotDetails extends Component {
  render() {
    const { name, street, zip, likes, comments } = this.props.spot
    return (
      <div>
        <h1>{name}</h1>
        <h1>
          {street}, {zip}
        </h1>
        <h1>{likes.length} likes</h1>
        <h1>{comments.length} comments</h1>
      </div>
    )
  }
}

export default SpotDetails
