import React, { Component, useEffect, useState } from 'react';
import Gettext from "./Gettext"
import Welcome from "./Welcome"
import '../App.css';

class Contents extends Component{

  render(){
    
    return(
      <div>
        <Welcome></Welcome>
        <Gettext></Gettext>
      </div>
    )
  }
}

export default Contents;