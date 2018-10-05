import React, { Component } from 'react';
import logo from './assets/svg/logo/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="centered">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to Jewel</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/app/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
