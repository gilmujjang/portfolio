import React, { Component } from 'react';
import '../App.css';

class Project extends Component{
  render(){
    return(
      <div className="layer">
        <a id="project"/>
        <h2>Projects</h2>
        <div className="projects">
          <div className="pro">
            <h4>Play.&</h4>
            <p>테니스 동아리 커뮤니티를 만들었다</p>
            <a href="https://playn.netlify.app/" target="_">Play.& 링크</a>
          </div>
          <div className="pro">
            <h4>클론코딩한거 모음</h4>
            <p>사진</p>
          </div>          <div className="pro">
            <h4>코인자동매매</h4>
            <p>사진</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;