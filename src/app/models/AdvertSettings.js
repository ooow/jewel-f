import PropTypes from 'prop-types';

export default class AdvertSettings {
  static propTypes = {
    autoDeactivateAt: PropTypes.number,
  };

  constructor(autoDeactivateAt) {
    this.autoDeactivateAt = autoDeactivateAt;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new AdvertSettings(object.autoDeactivateAt);
  }
}
