import React, { Component } from 'react'
import './skateSpot.css'

export default class SkateSpot extends Component {
  render() {
    return (
      <div>
        <p className="skateSpot" onClick={() => console.log(this.props.id)}>
          {this.props.text}
        </p>
      </div>
    )
  }
}
