import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';

class App extends Component {
  render() {
    return (
      <div className='text-center'>
        <header>
          <Logo />
          <h1>Welcome to Jewel</h1>
        </header>
        <section>
          <p>
            To get started, edit <code>src/app/pages/temp-app/App.js</code> and
            save to reload.
          </p>
        </section>
        <footer>
          <p className='text-muted'>Bootstrap 4</p>
        </footer>
      </div>
    );
  }
}

export default App;
