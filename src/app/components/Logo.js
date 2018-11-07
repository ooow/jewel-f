import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogoSVG from '../assets/images/Logo.svg';

const DEFAULT_LOGO_SIZE = '1em';

/**
 * A view component which displays a project logotype.
 */
class Logo extends Component {
  static propTypes = {
    size: PropTypes.string,
  };

  static defaultProps = {
    size: DEFAULT_LOGO_SIZE,
  };

  render() {
    const { size } = this.props;
    const style = {
      height: size,
      width: size,
    };

    return <img style={style} src={LogoSVG} alt='Jewel Logotype' />;
  }
}

export default Logo;
