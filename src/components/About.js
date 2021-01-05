import React, { Component } from 'react';
import '../App.css';

class About extends Component{
  render(){
    return(
      <div className="About">
        <h2>About</h2>
        <span className="row">
          <h4>PROFILE</h4>
          <p>사진</p>
        </span>
        <span className="row">
          <h4>school</h4>
          <p>킹오공대</p>
        </span>
      </div>
    )
  }
}

export default About;