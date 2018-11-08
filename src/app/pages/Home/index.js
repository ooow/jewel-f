import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ad from '../../models/Ad';
import AdCard from '../../components/AdCard';
import NavBar from '../../components/NavBar';

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
        <NavBar />
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
