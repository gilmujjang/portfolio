import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faReact, faPython } from '@fortawesome/free-brands-svg-icons'



class Skills extends Component{
  render(){
    return(
      <div className="layer">
        <h2>SKILLS</h2>
        <div className="row_content">
          <div className="icon">
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <p className="skill_name">Html5</p>
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faCss3Alt} size="4x" />
            <p className="skill_name">Css3</p>
          </div>          <div className="icon">
            <FontAwesomeIcon icon={faJs} size="4x" />
            <p className="skill_name">JavaScript</p>
          </div>          <div className="icon">
            <FontAwesomeIcon icon={faReact} size="4x" />
            <p className="skill_name">React</p>
          </div>          <div className="icon">
            <FontAwesomeIcon icon={faPython} size="4x" />
            <p className="skill_name">Python</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;