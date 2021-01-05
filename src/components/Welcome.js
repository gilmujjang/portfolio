import React, { Component } from 'react';
import '../App.css';

class Welcome extends Component{
  render(){
    return(
      <div className="welcome">
        <p>안녕하세요 민무길 입니다.{"\n"}프론트엔드 개발자를 지망합니다.</p>
      </div>
    )
  }
}

export default Welcome;