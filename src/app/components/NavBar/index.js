import React, { Component } from 'react';
import Logo from '../Logo';
import SearchBar from '../SearchBar';

/**
 * A view component which displays a Navigation bar.
 */
class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-white border-bottom'>
        <div className='container d-flex justify-content-between flex-sm-nowrap'>
          <a className='navbar-brand mx-1 p-0 d-none d-sm-inline' href='/'>
            <Logo style={{ height: '2em', width: '2em' }} />
          </a>
          <SearchBar className='mx-1 w-100' />
          <div className='p-1 mx-1 my-1 my-sm-0 bg-white rounded border text-nowrap text-muted'>
            Language stub
          </div>
          <div className='p-1 mx-1 my-1 my-sm-0 bg-white rounded border text-nowrap text-muted'>
            Sign in stub
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
