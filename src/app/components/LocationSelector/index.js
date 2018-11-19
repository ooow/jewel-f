import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './LocationSelector.scss';
import Location from '../../models/Location';

/**
 * A view component provides selection of the Location using list of predefined locations.
 */
class LocationSelector extends Component {
  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)).isRequired,
  };

  onSelectChange = (location) => {
    this.selectedLocation = location;
  };

  toOption = (location) => {
    const title = location.city === undefined ? location.country : location.city;
    return { value: title, label: title };
  };

  render() {
    const { locations } = this.props;
    const options = Array.from(locations, l => this.toOption(l));
    this.selectedLocation = options[0].value;
    return (
      <div className='input-group-append location-selector'>
        <Select
          className='w-100'
          defaultValue={this.selectedLocation}
          name={this.selectedLocation}
          options={options}
          onChange={location => this.onSelectChange(location)}
        />
      </div>
    );
  }
}

export default LocationSelector;
