import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Language from '../../models/Language';
import LanguageSelector from '../LanguageSelector';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SignInButton from '../SignInButton';
import mockJsonArrayOfLanguages from '../../mockData/languages.json';
import LocationSelector from '../LocationSelector';
import Location from '../../models/Location';
import mockJsonArrayOfLocations from '../../mockData/locations';

/**
 * A view component which displays a Navigation bar.
 */
class NavBar extends Component {
  static propTypes = {
    language: PropTypes.instanceOf(Language).isRequired,
    location: PropTypes.instanceOf(Location).isRequired,
  };

  // TODO: Replace to real languages.
  mockLanguages = mockJsonArrayOfLanguages.map(Language.toModel);

  // TODO: Replace to real locations.
  mockLocations = mockJsonArrayOfLocations.map(Location.jsonToModel);


  render() {
    const { language, location } = this.props;

    return (
      <nav className='navbar navbar-light bg-white border-bottom'>
        <div className='container d-flex'>
          <div className='row d-flex w-100'>
            <div className='col-2 d-none d-sm-inline'>
              <a className='navbar-brand mx-1 p-0' href='/'>
                <Logo />
              </a>
            </div>
            <div className='col'>
              <div className='form-row'>
                <div className='col p-0 px-sm-1'>
                  <SearchBar />
                </div>
                <div className='col-3 p-0 px-sm-1'>
                  <input className='form-control' disabled placeholder='CategorySelector stub' />
                </div>
                <div className='col-3 p-0 px-sm-1'>
                  <LocationSelector
                    selected={location}
                    locations={this.mockLocations}
                  />
                </div>
              </div>
            </div>
            <div className='col-2'>
              <div className='d-flex justify-content-between justify-content-sm-end'>
                <LanguageSelector
                  selected={language}
                  languages={this.mockLanguages}
                />
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    location: state.location,
  };
}

export default connect(mapStateToProps)(NavBar);
