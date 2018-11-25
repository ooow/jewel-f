import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Location from '../../models/Location';
import LocationSelector from '../LocationSelector';
import mockJsonArrayOfLocations from '../../mockData/locations';

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

  // TODO: Replace to real locations.
  mockLocations = mockJsonArrayOfLocations.map(Location.jsonToModel);

  render() {
    const { className, location } = this.props;

    return (
      <div className={className}>
        <div className='input-group'>
          <div className='input-group-prepend d-none d-sm-inline-flex'>
            <button className='btn btn-outline-border' type='button'>
              <FontAwesomeIcon icon='search' />
            </button>
          </div>
          <input className='form-control' placeholder='type to search...' />
          <LocationSelector
            locations={this.mockLocations}
            selected={location}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location };
}

export default connect(mapStateToProps)(SearchBar);
