import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ad from '../../models/Ad';
import AdCard from '../../components/AdCard';
import NavBar from '../../components/NavBar';

/* It's a temp component, will be removed soon */
class Home extends Component {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.instanceOf(Ad)).isRequired,
  };

  renderAds() {
    const { adverts } = this.props;
    return adverts.map(a => <AdCard ad={a} key={a.id} />);
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
  return { adverts: state.adverts.items };
}

export default connect(mapStateToProps)(Home);
