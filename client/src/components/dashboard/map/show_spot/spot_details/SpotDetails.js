import React, { Component } from 'react'

class SpotDetails extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.name}</h1>
      </div>
    )
  }
}

export default SpotDetails
