/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogoSVG from '../assets/images/Logo.svg';

const DEFAULT_LOGO_STYLE = {
  height: '1em',
  width: '1em',
};

/**
 * A view component which displays a project logotype.
 */
class Logo extends Component {
  static propTypes = {
    style: PropTypes.object, // Any valid for html size value.
  };

  static defaultProps = {
    style: DEFAULT_LOGO_STYLE,
  };

  render() {
    const { style } = this.props;
    return (
      <img
        style={{ ...DEFAULT_LOGO_STYLE, ...style }}
        src={LogoSVG}
        alt='Jewel Logotype'
      />
    );
  }
}

export default Logo;
