import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Advert from '../../models/Advert';
import AdvertCard from '../AdvertCard';
import AdvertViewSelector from '../AdvertViewSelector';

/**
 * A view component which displays advert view.
 */
class AdvertView extends Component {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.instanceOf(Advert)).isRequired,
  };

  renderAds() {
    const { adverts } = this.props;
    return adverts.map(a => <AdvertCard advert={a} key={a.id} />);
  }

  render() {
    return (
      <div>
        <div className='d-flex flex-wrap justify-content-between'>
          <div className='p-1 mx-1 border text-nowrap text-muted'>
            Breadcrumbs stub
          </div>
          <AdvertViewSelector />
        </div>
        <div className='d-flex flex-wrap justify-content-between'>
          {this.renderAds()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { adverts: state.adverts.items };
}

export default connect(mapStateToProps)(AdvertView);
