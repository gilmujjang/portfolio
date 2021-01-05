import React, { Component } from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import Gettext from './components/Gettext'
import './App.css';


class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Welcome></Welcome>
        <About></About>
        <Gettext></Gettext>
      </div>
    );
  }
}

export default App;