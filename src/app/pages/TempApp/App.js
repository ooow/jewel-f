import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ad from '../../models/Ad';
import Logo from '../../components/logo/Logo';
import AdCard from '../../components/AdCard';
import './App.scss';

/* It's a temp component, will be removed soon */
class App extends Component {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.instanceOf(Ad)).isRequired,
  };

  renderAds() {
    const { ads } = this.props;
    return ads.map(a => <AdCard ad={a} key={a.id} />);
  }

  render() {
    return (
      <div className='container'>
        <header className='container'>
          <Logo />
          <h1>Welcome to Jewel</h1>
        </header>
        <section className='container-horizontal'>{this.renderAds()}</section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ads: state.ads };
}

export default connect(mapStateToProps)(App);
