import React, { Component } from 'react';
import logo from '../../assets/svg/logo/logo.svg';
import './Logo.scss';

class Logo extends Component {
  render() {
    return <img className='logo' src={logo} alt='Jewel Logotype' />;
  }
}

export default Logo;
