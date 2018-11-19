import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A view component which displays advert view selector.
 */
class AdvertViewSelector extends Component {
  render() {
    return (
      <div>
        <button className='btn btn-link p-1 mx-1' type='button'>
          <FontAwesomeIcon icon='th' />
        </button>
        <button className='btn btn-link p-1 mx-1' type='button'>
          <FontAwesomeIcon icon='th-list' />
        </button>
      </div>
    );
  }
}

export default AdvertViewSelector;
