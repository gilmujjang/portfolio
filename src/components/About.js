import React, { Component } from 'react';
import myphoto from '../photo/myphoto.jpeg';
import logo from '../photo/logo.jpg';
import '../App.css';

class About extends Component{
  render(){
    return(
      <div className="layer">
        <a id="about"/>
        <h2>About</h2>
        <div className="row_content" id="about_content">
          <div className="row">
            <h4>PROFILE</h4>
            <img src={myphoto} width='96px' alt='내 사진'/>
          </div>
          <div className="row">
            <h4>school</h4>
            <img src= {logo} width='256px' alt='금오공대 로고'/>
            <p>기계시스템 공학과 재학중</p>
          </div>
          <div className="row">
            <h4>취미</h4>
            <p>테니스</p>
            <p>체스 : 체스닷컴 아이디 gilmujjang</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;