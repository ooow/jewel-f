import PropTypes from 'prop-types';

export default class Location {
  static propTypes = {
    country: PropTypes.string,
    city: PropTypes.string,
  };

  constructor(country, city) {
    this.country = country;
    this.city = city;
  }

  toString() {
    return `country: ${this.country} city: ${this.city}`;
  }

  static jsonToModel(jsonObject) {
    return new Location(jsonObject.country, jsonObject.city);
  }

  static toModel(item) {
    if (!item) {
      return null;
    }
    return new Location(item.country, item.city);
  }
}
