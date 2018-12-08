import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import Advert from '../../models/Advert';
import AdvertCard from '../../components/AdvertCard';
import NavBar from '../../components/NavBar';
import InfoCard from '../../components/InfoCard';

/**
 * Component renders the main Jewel page.
 */
class Main extends Component {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.instanceOf(Advert)).isRequired,
  };

  renderAds() {
    const { adverts } = this.props;
    return adverts.map(advert => (
      <AdvertCard
        advert={advert}
        key={advert.id} />
    ));
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className='container'>
          <div className='d-flex
                          flex-wrap
                          justify-content-center
                          justify-content-sm-between'>
            {this.renderAds()}
          </div>
        </section>
        <section className='container'>
          <div className='d-flex'>
            <InfoCard title='hehe' icon={faUserCircle} info='hehe' />
            <InfoCard title='hehe' icon={faUserCircle} info='hehe' />
            <InfoCard title='hehe' icon={faUserCircle} info='hehe' />
            <InfoCard title='hehe' icon={faUserCircle} info='hehe' />
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { adverts: state.adverts.items };
}

export default connect(mapStateToProps)(Main);
