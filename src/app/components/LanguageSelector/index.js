/* eslint-disable import/no-dynamic-require,jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalBody, UncontrolledTooltip } from 'reactstrap';
import { CHANGE_LANGUAGE, changeLanguage } from '../../redux/actions/language';
import Language from '../../models/Language';
import './LanguageSelector.scss';

/**
 * A view component which displays language icon and shows a dialog window
 * for choosing new languages from the provided list. When the new language
 * is selected, throws provided or default action.
 */
class LanguageSelector extends Component {
  static propTypes = {
    // Action which should be dispatched on choosing new language.
    action: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    // Icons size, by default 25.
    iconSize: PropTypes.number,
    // List of available for choosing languages.
    languages: PropTypes.arrayOf(PropTypes.instanceOf(Language)).isRequired,
    // Selected language, bu default English.
    selected: PropTypes.instanceOf(Language),
  };

  static defaultProps = {
    action: CHANGE_LANGUAGE,
    iconSize: 25,
    selected: new Language('en', 'English', true),
  };

  constructor(props) {
    super(props);

    this.toggleLanguagesBox = this.toggleLanguagesBox.bind(this);
    this.state = {
      // Flag that determines whether language box is open/close.
      isLanguagesBoxOpen: false,
    };
  }

  /** Shows or hides box with provided languages. */
  toggleLanguagesBox() {
    const { isLanguagesBoxOpen } = this.state;
    this.setState({ isLanguagesBoxOpen: !isLanguagesBoxOpen });
  }

  selectAndClose(language) {
    const { action, dispatch } = this.props;
    dispatch(changeLanguage(action, language));
    this.toggleLanguagesBox();
  }

  /** Renders box with provided languages. */
  renderLanguageBox() {
    const { languages } = this.props;

    return languages.map(
      language => (language.isAvailable
        ? this.renderAvailableLanguage(language)
        : this.renderNotAvailableLanguage(language)),
    );
  }

  /** Renders available for choosing language. */
  renderAvailableLanguage(language) {
    const { iconSize } = this.props;
    const flagSrc = require(`../.././assets/images/flags/${language.id}.svg`);

    return (
      <div
        className='col-8 m-auto mw-120px btn btn-link d-flex align-items-start'
        key={language.id}
        onClick={this.selectAndClose.bind(this, language)}
      >
        <img alt={language.title} src={flagSrc} width={iconSize} />
        <span className='ml-2'>{language.title}</span>
      </div>
    );
  }

  /** Renders not available for choosing language with tooltip. */
  renderNotAvailableLanguage(language) {
    const { iconSize } = this.props;
    const flagSrc = require(`../.././assets/images/flags/${language.id}.svg`);

    return (
      <div
        className='col-8 m-auto mw-120px btn d-flex align-items-start text-border'
        id='notAvailableLanguage'
        key={language.id}
      >
        <img alt={language.title} src={flagSrc} width={iconSize} />
        <span className='ml-2'>{language.title}</span>
        <UncontrolledTooltip placement='bottom' target='notAvailableLanguage'>
          Soon to be available
        </UncontrolledTooltip>
      </div>
    );
  }

  render() {
    const { selected, iconSize } = this.props;
    const { isLanguagesBoxOpen } = this.state;
    const flagSrc = require(`../.././assets/images/flags/${selected.id}.svg`);

    return (
      <div>
        <img
          className='cursor-pointer'
          alt={selected.title}
          src={flagSrc}
          width={iconSize}
          onClick={this.toggleLanguagesBox}
        />
        <Modal
          className='mw-100'
          contentClassName='container mt-5 pt-5 pt-sm-0 flex-sm-row-reverse bg-transparent border-0'
          fade={false}
          isOpen={isLanguagesBoxOpen}
          toggle={this.toggleLanguagesBox}
        >
          <ModalBody className='col-2 p-0 py-2 mw-120px border-dark bg-white'>
            {this.renderLanguageBox()}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LanguageSelector);
