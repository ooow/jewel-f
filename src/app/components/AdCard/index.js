import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DateService from '../../services/DateService';
import Ad from '../../models/Ad';
import './AdCard.scss';

const DEFAULT_CARD_SIZE = 250;
const BIG_TEXT_RATIO = 12;
const MEDIUM_TEXT_RATIO = 16;
const SMALL_TEXT_RATIO = 20;

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
    const titleStyle = {
      fontSize: size / BIG_TEXT_RATIO,
    };
    const titleMiddleStyle = {
      fontSize: size / MEDIUM_TEXT_RATIO,
    };
    const titleFooterStyle = {
      fontSize: size / SMALL_TEXT_RATIO,
    };

    return (
      <div className='card' style={cardStyle}>
        <div className='card-header'>
          <Link to={`/${ad.id}`}>
            <img className='card-image' alt={ad.title} src={ad.imageUrl} />
          </Link>
        </div>
        <div className='card-footer'>
          <div className='card-footer-content'>
            <div className='card-title-header' style={titleStyle}>
              <p>{ad.title}</p>
              <p>{ad.rate.toString()}</p>
            </div>
            <div className='card-title-body' style={titleMiddleStyle}>
              <p>Added by</p>
              <a className='primary-color' href='/'>
                {author}
              </a>
              <p>in {ad.location.city}</p>
            </div>
            <p className='card-title-footer' style={titleFooterStyle}>
              {createdAt}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdCard;
