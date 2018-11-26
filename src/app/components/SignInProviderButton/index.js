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
    provider: PropTypes.oneOf(['Google', 'Facebook']).isRequired,
  };

  render() {
    const { provider } = this.props;
    return (
      <button
        className='btn
                   btn-block
                   shadow-sm
                   text-black-50
                   text-left
                   tn-outline-border'
        type='button'>
        <span className='mr-2'>
          <img
            className='wh-1em'
            alt={`${provider} Logotype`}
            src={PROVIDERS[provider]}
          />
        </span>
        <span>Sing in using {provider}</span>
      </button>
    );
  }
}

export default SignInProviderButton;
