import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

/**
 * A view component which displays search bar.
 */
class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className='input-group'>
          <div className='input-group-prepend d-none d-sm-inline-flex'>
            <button className='btn btn-outline-border' type='button'>
              <FontAwesomeIcon icon='search' />
            </button>
          </div>
          <input
            className='form-control'
            placeholder='type to search...'
            type='text'
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
