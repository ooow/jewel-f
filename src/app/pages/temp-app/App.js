import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='centered'>
        <header className='header'>
          <Logo />
          <h1 className='title'>Welcome to Jewel</h1>
        </header>
        <p className='intro'>
          To get started, edit <code>src/app/pages/temp-app/App.js</code> and
          save to reload.
        </p>
      </div>
    );
  }
}

export default App;
