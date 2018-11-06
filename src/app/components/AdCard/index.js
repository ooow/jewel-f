import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DateService from '../../services/DateService';
import Ad from '../../models/Ad';
import './AdCard.scss';

const DEFAULT_CARD_SIZE = 250;

/**
 * Ad Card is a view component which displays ad like a card. Internal text
 * size automatically changes depending on provided card size.
 */
class AdCard extends Component {
  static propTypes = {
    ad: PropTypes.instanceOf(Ad).isRequired,
    size: PropTypes.number,
  };

  static defaultProps = {
    size: DEFAULT_CARD_SIZE,
  };

  render() {
    const { ad } = this.props;
    const createdAt = DateService.msToViewText(ad.createdAt);
    /* TODO: Replace to real company or user name */
    const author = ad ? '@Company' : 'User';
    const { size } = this.props;
    const cardStyle = {
      height: size,
      width: size,
    };

    return (
      <div className='card shadow m-1' style={cardStyle}>
        <Link
          to={`/ad/${ad.id}`}
          className='card-img-top image-fill h-100'
          style={{ backgroundImage: `url("${ad.imageUrl}")`, }}
        />
        <div className='card-body p-1'>
          <div className='d-flex flex-wrap justify-content-between mb-2 font-weight-bold'>
            <span>{ad.title}</span>
            <span>{ad.rate.toString()}</span>
          </div>
          <div className='d-flex flex-wrap justify-content-between small text-muted'>
            <a href='/'>{author}</a>
            <span>{ad.location.city}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AdCard;
