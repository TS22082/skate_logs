import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './skateSpot.css'
import sk8r from './noun_skateboarder_1294711.png'

export default class SkateSpot extends Component {
  render() {
    return (
      <div>
        <Link to={`post/${this.props.skatespot._id}`}>
          <img src={sk8r} alt="SK8" className="skateSpot" />
          {/* {this.props.text} */}
        </Link>
      </div>
    )
  }
}
