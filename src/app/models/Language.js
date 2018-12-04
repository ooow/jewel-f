import PropTypes from 'prop-types';

export default class Language {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    isAvailable: PropTypes.bool,
  };

  constructor(id, title, isAvailable) {
    this.id = id;
    this.title = title;
    this.isAvailable = isAvailable;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new Language(object.id, object.title, object.isAvailable);
  }
}
