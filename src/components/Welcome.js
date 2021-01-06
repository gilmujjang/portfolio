import React, { Component } from 'react';
import '../App.css';

class Welcome extends Component{
  render(){
    return(
      <>
        <div className="welcome">
          <div className="hi">
            안녕하세요
            <span className="name"> 민무길 </span>
            입니다.
          </div>
          <div className="hi">
            프론트엔드 개발자를 지망합니다.
          </div>
        </div>
      </>
    )
  }
}

export default Welcome;