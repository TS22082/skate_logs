import React, { Component } from 'react'
import './skateSpot.css'

export default class SkateSpot extends Component {
  render() {
    return (
      <div>
        <p className="skateSpot">{this.props.text}</p>
      </div>
    )
  }
}
