import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ad from '../../models/Ad';
import Logo from '../../components/Logo/index';
import AdCard from '../../components/AdCard';

/* It's a temp component, will be removed soon */
class Home extends Component {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.instanceOf(Ad)).isRequired,
  };

  renderAds() {
    const { ads } = this.props;
    return ads.map(a => <AdCard ad={a} key={a.id} />);
  }

  render() {
    return (
      <div>
        <header className='container'>
          <center>
            <Logo style={{ height: '100px', width: '100px' }} />
            <h1>
              Welcome to <Logo style={{ background: 'red' }} />
              Jewel
            </h1>
            <span>
              <Logo />
              Advert dashboard
              <Logo />
            </span>
          </center>
        </header>
        <section className='container'>
          <div className='d-flex flex-wrap justify-content-center justify-content-sm-between'>
            {this.renderAds()}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ads: state.ads };
}

export default connect(mapStateToProps)(Home);
