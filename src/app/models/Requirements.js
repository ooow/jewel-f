import PropTypes from 'prop-types';

export default class Requirements {
  static propTypes = {
    experience: PropTypes.string,
  };

  constructor(experience) {
    this.experience = experience;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new Requirements(object.experience);
  }
}
