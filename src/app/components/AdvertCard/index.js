import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DateService from '../../services/DateService';
import Advert from '../../models/Advert';
import './AdvertCard.scss';

const DEFAULT_SIZE = 250;

/**
 * A view component which displays advert like a card.
 */
class AdvertCard extends Component {
  static propTypes = {
    advert: PropTypes.instanceOf(Advert).isRequired,
    size: PropTypes.number,
  };

  static defaultProps = {
    size: DEFAULT_SIZE,
  };

  detectAuthor() {
    // TODO: Replace to real company or user name.
    return Boolean(this.advert) && this.advert.contacts.companyId
      ? '@Company'
      : 'User';
  }

  render() {
    const { advert } = this.props;
    const { size } = this.props;
    const cardStyle = {
      height: size,
      width: size,
    };
    const author = this.detectAuthor();
    const createdAt = DateService.msToViewText(advert.createdAt);

    return (
      <div className='card shadow m-1' style={cardStyle}>
        <Link
          to={`/ad/${advert.id}`}
          className='card-img-top image-fill h-100'
          style={{ backgroundImage: `url("${advert.imageUrl}")` }}
        />
        <div className='card-body p-1'>
          <div className='d-flex flex-wrap justify-content-between mb-2 font-weight-bold'>
            <span>{advert.title}</span>
            <span>{advert.rate.toString()}</span>
          </div>
          <div className='d-flex flex-wrap justify-content-between small text-muted'>
            <a href='/'>{author}</a>
            <span>{advert.location.city}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvertCard;
