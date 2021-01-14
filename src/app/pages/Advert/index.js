import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';

/**
 * Component renders the Advert page.
 */
class Advert extends Component {
  static propTypes = {
    adverts: PropTypes.arrayOf(PropTypes.instanceOf(Advert)).isRequired,
  };

  render() {
    const { adverts } = this.props;
    const { id } = this.props.match.params;
    const advert = adverts.find(a => a.id == id);
    return (
      <div>
        <NavBar />
        <section className='container'>
          <div className='d-flex
                          flex-wrap
                          justify-content-center
                          justify-content-sm-between'>
            { advert.toString() }
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { adverts: state.adverts.items };
}

export default connect(mapStateToProps)(Advert);
