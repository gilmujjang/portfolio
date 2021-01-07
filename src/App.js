import React, { Component } from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
//import Gettext from './components/Gettext'
import Skills from './components/Skills'
import Project from './components/Project'
import './App.css';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <a id="welcome"/>
        <Header></Header>
        <Welcome></Welcome>
        <About></About>
        <Skills></Skills>
        <Project></Project>
      </div>
    );
  }
}

export default App;