import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogoSVG from '../assets/images/Logo.svg';

const DEFAULT_LOGO_SIZE = '1em';

/**
 * A view component which displays a project logotype.
 * Properties:
 *   size - any valid for html size value
 */
class Logo extends Component {
  static propTypes = {
    size: PropTypes.string,
  };

  static defaultProps = {
    size: DEFAULT_LOGO_SIZE,
  };

  render() {
    const { size, style, ...other } = this.props;
    const logoStyle = {
      height: other.height || size,
      width: other.width || size,
    };

    return (
      <img
        style={{ ...style, ...logoStyle }}
        src={LogoSVG}
        alt='Jewel Logotype'
        {...other}
      />
    );
  }
}

export default Logo;
