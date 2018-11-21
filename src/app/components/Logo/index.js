/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogoSVG from '../../assets/images/logo/Jewel.svg';

/**
 * A view component which displays the project logotype.
 */
class Logo extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'wh-2em',
  };

  render() {
    const { className } = this.props;
    return <img alt='Jewel Logotype' className={className} src={LogoSVG} />;
  }
}

export default Logo;
