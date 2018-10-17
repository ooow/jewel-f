import PropTypes from 'prop-types';

export default class Requirements {
  static propTypes = {
    experience: PropTypes.string,
  };

  constructor(experience) {
    this.experience = experience;
  }

  toString() {
    return `experience: ${this.experience}`;
  }
}
