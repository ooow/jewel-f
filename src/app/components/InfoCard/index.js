import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * A view component which displays card with the owner contact information.
 */
class InfoCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  };

  render() {
    const { title, icon, info } = this.props;
    return (
      <div className='bg-card px-2 py-0'>
        <div className='d-flex justify-content-between'>
          <span className='text-divider'>
            {title}
          </span>
          <span>
            <FontAwesomeIcon className='text-half-primary' icon={icon} />
          </span>
        </div>
        <div>
          {info}
        </div>
      </div>
    );
  }
}

export default InfoCard;
