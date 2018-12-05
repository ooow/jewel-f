import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Contacts from '../../models/Contacts';

/**
 * A view component which displays card with the owner contact information.
 */
class ContactCard extends Component {
  static propTypes = {
    className: PropTypes.string,
    contacts: PropTypes.instanceOf(Contacts).isRequired,
  };

  static defaultProps = {
    className: 'wh-250px',
  };

  render() {
    const { className, contacts } = this.props;
    return (
      <div className={className}>
        <div className='align-items-center
                        bg-card
                        border-0
                        card
                        h-100
                        justify-content-center
                        of-hidden
                        w-100'>
          <div className='align-items-center
                          d-flex
                          flex-column
                          h-85
                          justify-content-center
                          w-80'>
            <FontAwesomeIcon
              className='text-half-primary'
              size='9x'
              icon={faUserCircle} />
            <span className='mt-1'>{contacts.person}</span>
            <span className='border-bottom border-divider mt-1 w-100' />
            <span className='mt-2'>{contacts.email}</span>
            <span className='mt-2 text-primary'>{contacts.phone}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
