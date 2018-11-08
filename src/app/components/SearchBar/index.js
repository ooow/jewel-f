import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A view component which displays search bar.
 */
class SearchBar extends Component {
  render() {
    const { ...other } = this.props;

    return (
      <div {...other}>
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
        </div>
      </div>
    );
  }
}

export default SearchBar;
