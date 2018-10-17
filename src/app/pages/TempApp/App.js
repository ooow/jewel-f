/* eslint-disable react/destructuring-assignment,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Ad from '../../models/Ad';
import Logo from '../../components/logo/Logo';

/* It's a temp component, will be removed soon */
class App extends Component {
  static propTypes = {
    ads: PropTypes.arrayOf(PropTypes.instanceOf(Ad)),
  };

  renderAds() {
    return this.props.ads.map(a => <p key={a.id}>{a.toString()} </p>);
  }

  render() {
    return (
      <div className='text-center'>
        <header>
          <Logo />
          <h1>Welcome to Jewel</h1>
        </header>
        <section>{this.renderAds()}</section>
        <footer>
          <p className='text-muted'>Bootstrap 4</p>
          <p className='text-muted'>Routing</p>
          <p className='text-muted'>Redux</p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ads: state.ads };
}

export default connect(mapStateToProps)(App);
