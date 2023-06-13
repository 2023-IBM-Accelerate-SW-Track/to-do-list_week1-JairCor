import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              // Image goes here
              src={pfp}
              alt="Profile Pic"
              ></img> 
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jair Coronado</div>
            <div className="brief_description">
              Hey everyone! I am Jair, I was born and raised in San Antonio, Texas.
              I am a huge car/aviation enthusiast. I have little to no experience with front end,
              so it should be a fun adventure!
            </div>
      </div>
    </div>
  </div>
    )
  }
}