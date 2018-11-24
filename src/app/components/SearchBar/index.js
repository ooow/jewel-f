import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import Location from '../../models/Location';
import LocationSelector from '../LocationSelector';
import mockJsonArrayOfLocations from '../../mockData/locations.json';

/**
 * A view component which displays search bar.
 */
class SearchBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    location: PropTypes.instanceOf(Location).isRequired,
  };

  static defaultProps = {
    className: '',
  };

  // TODO: Replace to real languages.
  mockLocations = mockJsonArrayOfLocations.map(Location.jsonToModel);

  render() {
    const { className, location } = this.props;
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
          <LocationSelector selected={location} locations={this.mockLocations} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location };
}

export default connect(mapStateToProps)(SearchBar);
