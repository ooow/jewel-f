import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Location from '../../models/Location';

/**
 * A view component which displays a Location with the icon in user readable
 * format.
 */
class LocationView extends Component {
  static propTypes = {
    location: PropTypes.instanceOf(Location).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'h4',
  };

  render() {
    const { location, className } = this.props;

    return (
      <span className={className}>
        <FontAwesomeIcon className='text-icon' icon='map-marker-alt' />
        <span className='ml-2 text-muted'>{location.toString()}</span>
      </span>
    );
  }
}

export default LocationView;
