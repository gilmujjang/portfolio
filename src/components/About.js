import React, { Component } from 'react';
import '../App.css';

class About extends Component{
  render(){
    return(
      <div className="about">
        <h2>About</h2>
        <div className="row">
          <h4>PROFILE</h4>
          <p>사진</p>
        </div>
        <div className="row">
          <h4>school</h4>
          <p>킹오공대</p>
        </div>
      </div>
    )
  }
}

export default About;