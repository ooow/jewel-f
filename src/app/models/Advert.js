import PropTypes from 'prop-types';
import Rate from './Rate';
import Contacts from './Contacts';
import Location from './Location';
import Requirements from './Requirements';
import Settings from './AdvertSettings';

export default class Advert {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.number,
    isActive: PropTypes.bool,
    rate: PropTypes.instanceOf(Rate),
    contacts: PropTypes.instanceOf(Contacts),
    location: PropTypes.instanceOf(Location),
    requirements: PropTypes.instanceOf(Requirements),
    settings: PropTypes.instanceOf(Settings),
  };

  constructor(
    id,
    title,
    imageUrl,
    description,
    createdAt,
    isActive,
    rate,
    contacts,
    location,
    requirements,
    settings,
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.createdAt = createdAt;
    this.isActive = isActive;
    this.rate = rate;
    this.contacts = contacts;
    this.location = location;
    this.requirements = requirements;
    this.settings = settings;
  }

  toString() {
    return `id: ${this.id} 
    title: ${this.title} 
    imageUrl: ${this.imageUrl} 
    description: ${this.description} 
    createdAt: ${this.createdAt} 
    isActive: ${this.isActive}`;
  }

  static jsonToModel(jsonObject) {
    return new Advert(
      jsonObject.id,
      jsonObject.title,
      jsonObject.imageUrl,
      jsonObject.description,
      jsonObject.createdAt,
      jsonObject.isActive,
      Rate.jsonToModel(jsonObject.rate),
      jsonObject.contacts,
      Location.jsonToModel(jsonObject.location),
      jsonObject.requirements,
      jsonObject.settings,
    );
  }
}
