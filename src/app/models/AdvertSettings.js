import PropTypes from 'prop-types';

export default class AdvertSettings {
  static propTypes = {
    isRemoved: PropTypes.bool,
    autoDeactivateAt: PropTypes.number,
  };

  constructor(isRemoved, autoDeactivateAt) {
    this.isRemoved = isRemoved;
    this.autoDeactivateAt = autoDeactivateAt;
  }

  toString() {
    return `isRemoved: ${this.isRemoved} 
    autoDeactivateAt: ${this.autoDeactivateAt}`;
  }
}
