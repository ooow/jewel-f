import PropTypes from 'prop-types';

export default class AdvertSettings {
  static propTypes = {
    autoDeactivateAt: PropTypes.number,
  };

  constructor(isRemoved, autoDeactivateAt) {
    this.autoDeactivateAt = autoDeactivateAt;
  }

  toString() {
    return `autoDeactivateAt: ${this.autoDeactivateAt}`;
  }
}
