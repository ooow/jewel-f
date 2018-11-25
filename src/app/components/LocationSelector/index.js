import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'reactstrap';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Location from '../../models/Location';
import { CHANGE_LOCATION, changeLocation } from '../../redux/actions/location';

/**
 * A view component provides selection of the Location using list of predefined locations.
 */
class LocationSelector extends Component {
  static propTypes = {
    action: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)).isRequired,
    selected: PropTypes.instanceOf(Location),
  };

  static defaultProps = {
    action: CHANGE_LOCATION,
    selected: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      // Flag that determines whether language box is open/close.
      isLocationPopoverOpen: false,
      filter: '',
    };
    this.toggleLocationPopover = this.toggleLocationPopover.bind(this);
  }

  onFilterChange(event) {
    this.setState({ filter: event.target.value });
  }

  inputFieldValue() {
    const { isLocationPopoverOpen, filter } = this.state;
    const { selected } = this.props;

    if (isLocationPopoverOpen) return filter;
    if (selected !== null) return `${selected.country} ${selected.city}`;
    return '';
  }

  selectAndClose(location) {
    const { action, dispatch, selected } = this.props;
    if (selected !== location) {
      dispatch(changeLocation(action, location));
    }
    this.setState({ filter: '' });
    this.toggleLocationPopover();
  }

  toggleLocationPopover() {
    this.setState(prevState => ({
      isLocationPopoverOpen: !prevState.isLocationPopoverOpen,
    }));
  }

  renderLocation(location) {
    return (
      <button
        key={location.country + location.city}
        className='col m-auto btn btn-link d-flex align-items-start'
        type='button'
        onClick={this.selectAndClose.bind(this, location)}
      >
        <span>
          {location.country} {location.city}
        </span>
      </button>
    );
  }

  renderLocationPopover() {
    const { locations } = this.props;
    const { filter } = this.state;
    const locationsFiltered = locations.filter(
      location => location.country.toUpperCase().startsWith(filter.toUpperCase())
        || location.city.toUpperCase().startsWith(filter.toUpperCase()),
    );
    return locationsFiltered.map(this.renderLocation.bind(this));
  }

  render() {
    const { isLocationPopoverOpen } = this.state;
    const popoverId = 'languageinputfieldpopover';
    return (
      <div className='input-group'>
        <div className='input-group-prepend d-none d-sm-inline-flex'>
          <span className='input-group-text bg-white text-border'>
            <FontAwesomeIcon icon='map-marker-alt' />
          </span>
        </div>
        <input
          id={popoverId}
          className='form-control d-inline'
          placeholder='location'
          type='text'
          onFocus={this.toggleLocationPopover}
          // onBlur={this.toggleLocationPopover}
          value={this.inputFieldValue()}
          onChange={this.onFilterChange.bind(this)}
        />
        <Popover
          hideArrow
          isOpen={isLocationPopoverOpen}
          placement='bottom'
          target={popoverId}
          toggle={this.toggleLocationPopover}
        >
          {this.renderLocationPopover()}
        </Popover>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LocationSelector);
