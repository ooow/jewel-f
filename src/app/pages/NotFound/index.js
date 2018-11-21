/* eslint-disable react/forbid-prop-types,react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  // TODO: Rewrite with using bootstrap.
  render() {
    return (
      <div className='not-found-container'>
        <p className='not-fount-text'>
          4
          <span role='img' aria-label='face-screaming-in-fear'>
            😱
          </span>
          4
        </p>
        <h1>Oops! This page not found!</h1>
        <p>
          You will be redirect to the <a href='/'>home page</a> in a few secs.
        </p>
        {this.redirect()}
      </div>
    );
  }
}

export default NotFound;
