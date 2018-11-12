import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleLogoSVG from '../../assets/images/logo/Google.svg';
import FacebookLogoSVG from '../../assets/images/logo/Facebook.svg';

const PROVIDERS = {
  Google: GoogleLogoSVG,
  Facebook: FacebookLogoSVG,
};

/**
 * A view component which displays a SignIn button with some provider.
 */
class SignInProviderButton extends Component {
  static propTypes = {
    // style: PropTypes.object, // Any valid for html size value.
    provider: PropTypes.oneOf(['Google', 'Facebook']).isRequired,
  };

  render() {
    const { provider } = this.props;
    return (
      <button
        type='button'
        className='btn btn-outline-border btn-block text-left text-black-50 shadow-sm'
      >
        <span className='mr-2'>
          <img
            style={{ height: '1em', width: '1em' }}
            src={PROVIDERS[provider]}
            alt={`${provider} Logotype`}
          />
        </span>
        <span>Sing in using {provider}</span>
      </button>
    );
  }
}

export default SignInProviderButton;
