import PropTypes from 'prop-types';
import Contacts from './Contacts';
import Location from './Location';
import Rate from './Rate';
import Requirements from './Requirements';
import Settings from './AdvertSettings';

export default class Advert {
  static propTypes = {
    id: PropTypes.string,
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

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new Advert(
      object.id,
      object.title,
      object.imageUrl,
      object.description,
      object.createdAt,
      object.isActive,
      Rate.toModel(object.rate),
      Contacts.toModel(object.contacts),
      Location.toModel(object.location),
      Requirements.toModel(object.requirements),
      Settings.toModel(object.settings),
    );
  }
}
