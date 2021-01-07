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
            <h4>css이것저것한거 링크</h4>
            <p>사진</p>
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