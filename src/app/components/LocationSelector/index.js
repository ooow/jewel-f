import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CHANGE_LOCATION, changeLocation } from '../../redux/actions/location';
import Location from '../../models/Location';

/**
 * A view component which displays field-selector for searching location from
 * provided list. When the new location is selected, throws provided or default
 * action.
 */
// TODO: Rewrite to normal selector component. The popover isn't able to work
// with many options(more than 10), but we can leave this solution for a while.
class LocationSelector extends Component {
  static propTypes = {
    // Action which should be dispatched on choosing new location.
    action: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    // List of available for searching and choosing locations.
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location)).isRequired,
    // Selected location, bu default Poland, Warsaw.
    selected: PropTypes.instanceOf(Location),
  };

  static defaultProps = {
    action: CHANGE_LOCATION,
    selected: new Location('Poland', 'Warsaw'),
  };

  constructor(props) {
    super(props);

    this.state = {
      // Flag that determines whether location selector is open/close.
      isLocationPopoverOpen: false,
      // Input field value.
      value: '',
    };
    this.renderLocation = this.renderLocation.bind(this);
    this.toggleLocationPopover = this.toggleLocationPopover.bind(this);
    this.valueChange = this.valueChange.bind(this);
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
    this.setState({ value: '' });
    this.toggleLocationPopover();
  }

  /** Returns input field value or selected location. */
  value() {
    const { isLocationPopoverOpen, value } = this.state;
    const { selected } = this.props;

    return isLocationPopoverOpen ? value : selected.city || selected.country;
  }

  valueChange(event) {
    this.setState({ value: event.target.value });
  }

  /**
   * Renders popover with provided locations. Filters locations on value
   * change.
   */
  renderLocationPopover() {
    const { locations } = this.props;
    const { value } = this.state;
    const searchPhrase = value.toLowerCase();

    const locationsFiltered = locations.filter(location => location
      .toString()
      .toLowerCase()
      .includes(searchPhrase));

    return locationsFiltered.map(this.renderLocation);
  }

  /** Renders location item for choosing. */
  renderLocation(location) {
    return (
      // TODO: Replace key to location.id, when it will be available.
      <button
        className='col m-auto btn btn-link d-flex align-items-start'
        type='button'
        key={location.country + location.city}
        onClick={this.selectAndClose.bind(this, location)}>
        <span>{location.toString()}</span>
      </button>
    );
  }

  render() {
    const { isLocationPopoverOpen } = this.state;
    const selectedId = 'selected-location';

    return (
      <div
        className='form-control custom-form-control-input'
        id={selectedId}
        style={{ maxWidth: '10rem' }}>
        <div className='form-inline flex-nowrap'>
          <FontAwesomeIcon className='text-border mr-2' icon='map-marker-alt' />
          <input
            className='w-100'
            placeholder='Location'
            onChange={this.valueChange}
            onFocus={this.toggleLocationPopover}
            value={this.value()}
          />
          <Popover
            hideArrow
            placement='bottom'
            isOpen={isLocationPopoverOpen}
            target={selectedId}
            toggle={this.toggleLocationPopover}>
            {this.renderLocationPopover()}
          </Popover>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LocationSelector);
