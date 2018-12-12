/* eslint-disable react/prop-types */
import React, { Component } from 'react';

const REDIRECT_DELAY = 3000;

/**
 * Component NotFound shows a page with 404 error message and
 * redirect to the main page.
 */
class NotFound extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.history.push('/');
    }, REDIRECT_DELAY);
  }

  render() {
    return (
      <div
        className='align-items-center
                   container
                   d-flex
                   flex-column
                   h-100vh
                   justify-content-center'>
        <h2>
          4
          <span role='img' aria-label='face-screaming-in-fear'>
            😱
          </span>
          4
        </h2>
        <h1>Oops! This page not found!</h1>
        <span>
          You will be redirect to the <a href='/'>home page</a> in a few
          secs.
        </span>
      </div>
    );
  }
}

export default NotFound;
