import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Language from '../../models/Language';
import LanguageSelector from '../LanguageSelector';
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import SignInButton from '../SignInButton';
import mockJsonArrayOfLanguages from '../../mock/languages';

/**
 * A view component which displays a Navigation bar.
 */
class NavBar extends Component {
  static propTypes = {
    language: PropTypes.instanceOf(Language).isRequired,
  };

  // TODO: Replace to real languages.
  mockLanguages = mockJsonArrayOfLanguages.map(Language.toModel);

  render() {
    const { language } = this.props;

    return (
      <nav className='navbar navbar-light bg-white border-bottom'>
        <div className='container
                        d-flex
                        flex-sm-nowrap
                        justify-content-between'>
          <a className='navbar-brand mx-1 p-0 d-none d-sm-inline' href='/'>
            <Logo />
          </a>
          <SearchBar className='mx-3 w-100' />
          <LanguageSelector
            languages={this.mockLanguages}
            selected={language}
          />
          <SignInButton />
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

export default connect(mapStateToProps)(NavBar);
