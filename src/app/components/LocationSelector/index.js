import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'reactstrap';
import { connect } from 'react-redux';
import Location from '../../models/Location';
import { CHANGE_LOCATION, changeLocation } from '../../redux/actions/location';

/**
 * A view component provides selection of the Location using list of predefined locations.
 */
class LocationSelector extends Component {
  static propTypes = {
    action: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)),
    selected: PropTypes.instanceOf(Location),
  };

  static defaultProps = {
    action: CHANGE_LOCATION,
    selected: new Location('Russia', 'Saratov'),
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

  toggleLocationPopover() {
    this.setState(prevState => ({
      isLocationPopoverOpen: !prevState.isLocationPopoverOpen,
    }));
  }

  selectAndClose(location) {
    const { action, dispatch, selected } = this.props;
    if (selected !== location) {
      dispatch(changeLocation(action, location));
    }
    this.setState({ filter: '' });
    this.toggleLocationPopover();
  }

  renderLocationPopover() {
    const { locations } = this.props;
    const { filter } = this.state;
    const locationsFiltered = locations.filter(location => location.country.toUpperCase().startsWith(filter.toUpperCase()) || location.city.toUpperCase().startsWith(filter.toUpperCase()));
    return locationsFiltered.map(this.renderLocation.bind(this));
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

  render() {
    const { isLocationPopoverOpen } = this.state;
    const popoverId = 'languageinputfieldpopover';
    return (
      <div>
        <input
          id={popoverId}
          className='form-control'
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
