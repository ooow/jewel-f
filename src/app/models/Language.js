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

  static toModel(item) {
    if (!item) {
      return null;
    }
    return new Language(item.id, item.title, item.isAvailable);
  }
}
