/* eslint-disable import/no-dynamic-require,jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Popover, UncontrolledTooltip } from 'reactstrap';
import { CHANGE_LANGUAGE, changeLanguage } from '../../redux/actions/language';
import Language from '../../models/Language';

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
    const { action, dispatch, selected } = this.props;
    if (selected !== language) {
      dispatch(changeLanguage(action, language));
    }
    this.toggleLanguagesBox();
  }

  /** Renders box with provided languages. */
  renderLanguageBox() {
    const { languages } = this.props;
    return languages.map(this.renderLanguage.bind(this));
  }

  /** Renders language item for choosing, if available. */
  renderLanguage(language) {
    const { iconSize } = this.props;
    const flagSrc = require(`../../assets/images/flags/${language.id}.svg`);
    const id = `language-icon-${language.id}`;

    return (
      <span id={id} key={language.id}>
        <button
          className='col m-auto btn btn-link d-flex align-items-start'
          type='button'
          disabled={!language.isAvailable}
          onClick={this.selectAndClose.bind(this, language)}
        >
          <img alt={language.title} src={flagSrc} width={iconSize} />
          <span className='ml-2'>{language.title}</span>
        </button>
        {!language.isAvailable && (
          <UncontrolledTooltip placement='bottom' target={id} delay={0}>
            Will be available soon
          </UncontrolledTooltip>
        )}
      </span>
    );
  }

  render() {
    const { selected, iconSize } = this.props;
    const { isLanguagesBoxOpen } = this.state;
    const flagSrc = require(`../../assets/images/flags/${selected.id}.svg`);
    const popoverID = 'selected-language-icon';

    return (
      <div>
        <button id={popoverID} className='btn btn-link' type='button' onClick={this.toggleLanguagesBox}>
          <img
            className='cursor-pointer'
            alt={selected.title}
            src={flagSrc}
            width={iconSize}
          />
        </button>
        <Popover
          placement='bottom'
          target={popoverID}
          isOpen={isLanguagesBoxOpen}
          toggle={this.toggleLanguagesBox}
        >
          {this.renderLanguageBox()}
        </Popover>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LanguageSelector);
