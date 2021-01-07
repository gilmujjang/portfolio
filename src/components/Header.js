import React, { Component } from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <h2>길무짱의 포트폴리오</h2>
        <div>
          <a clasName="nav_tag" href="#welcome">welcome</a>
          <a clasName="nav_tag" href="#about">about</a>
          <a clasName="nav_tag" href="#skills">skills</a>
          <a clasName="nav_tag" href="#project">project</a>
        </div>
      </div>
    )
  }
}

export default Header;