import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationSelector from '../LocationSelector';
import Location from '../../models/Location';
import mockJsonArrayOfLocations from '../../mockData/locations.json';

/**
 * A view component which displays search bar.
 */
class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    const locations = mockJsonArrayOfLocations.map(Location.jsonToModel);
    return (
      <div className={className}>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <button className='btn btn-outline-border' type='button'>
              <FontAwesomeIcon icon='search' />
            </button>
          </div>
          <input
            className='form-control'
            placeholder='type to search...'
            type='text'
          />
          <LocationSelector locations={locations} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
