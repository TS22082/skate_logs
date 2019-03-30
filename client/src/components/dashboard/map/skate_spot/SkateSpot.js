import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './skateSpot.css'

export default class SkateSpot extends Component {
  render() {
    return (
      <div>
        <Link to={`post/${this.props.skatespot._id}`} className="skateSpot">
          {this.props.text}
        </Link>
      </div>
    )
  }
}
