import React, { Component } from 'react';
import '../App.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <a clasName="nav_tag_home" href="#welcome">
          <h2>길무짱의 포트폴리오</h2>
        </a>
        <div>
          <a id="nav_tag" clasName="nav_tag" href="#welcome">welcome</a>
          <a id="nav_tag" clasName="nav_tag" href="#about">about</a>
          <a id="nav_tag" clasName="nav_tag" href="#skills">skills</a>
          <a id="nav_tag" clasName="nav_tag" href="#project">project</a>
        </div>
      </div>
    )
  }
}

export default Header;