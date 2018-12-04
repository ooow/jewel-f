import PropTypes from 'prop-types';

export default class Location {
  static propTypes = {
    country: PropTypes.string.isRequired,
    city: PropTypes.string,
  };

  constructor(country, city) {
    this.country = country;
    this.city = city;
  }

  toString() {
    return this.city ? `${this.country}, ${this.city}` : this.country;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return object.city
      ? new Location(object.country, object.city)
      : new Location(object.country);
  }
}
