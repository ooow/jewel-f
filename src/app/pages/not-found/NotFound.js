/* eslint-disable react/forbid-prop-types,react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/logo/Logo';
import './NotFound.scss';

const REDIRECT_DELAY = 3000;

/**
 * Component NotFound shows a page with 404 error message and
 * redirect to the main page.
 */
class NotFound extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  redirect() {
    setTimeout(() => {
      this.props.history.push('/');
    }, REDIRECT_DELAY);
  }

  render() {
    return (
      <div className='not-found-container'>
        <div className='not-found-logo'>
          <Logo />
        </div>
        <h3 className='redirect-text'>
          404! Ups! This page not found! You will redirect to the Jewel.io in a
          few sec.
        </h3>
        {this.redirect()}
      </div>
    );
  }
}

export default NotFound;
