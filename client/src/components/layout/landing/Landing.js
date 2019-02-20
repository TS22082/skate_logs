import React, { Component } from 'react'
import video from '../../../img/Cross_frame.mp4'
import './landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="bg-video">
        <video src={video} className="bg-video__content" autoPlay loop />
      </div>
    )
  }
}

export default Landing
