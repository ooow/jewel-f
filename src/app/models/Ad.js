import PropTypes from 'prop-types';
import Compensatory from './Compensatory';
import Contacts from './Contacts';
import Location from './Location';
import Requirements from './Requirements';
import Settings from './Settings';

export default class Ad {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    photoUrl: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.number,
    isActive: PropTypes.bool,
    compensator: PropTypes.instanceOf(Compensatory),
    contacts: PropTypes.instanceOf(Contacts),
    location: PropTypes.instanceOf(Location),
    requirements: PropTypes.instanceOf(Requirements),
    settings: PropTypes.instanceOf(Settings),
  };

  constructor(
    id,
    title,
    photoUrl,
    description,
    createdAt,
    isActive,
    compensatory,
    contacts,
    location,
    requirements,
    settings,
  ) {
    this.id = id;
    this.title = title;
    this.photoUrl = photoUrl;
    this.description = description;
    this.createdAt = createdAt;
    this.isActive = isActive;
    this.compensatory = compensatory;
    this.contacts = contacts;
    this.location = location;
    this.requirements = requirements;
    this.settings = settings;
  }

  toString() {
    return `id: ${this.id} 
    title: ${this.title} 
    photoUrl: ${this.photoUrl} 
    description: ${this.description} 
    createdAt: ${this.createdAt} 
    isActive: ${this.isActive}`;
  }

  static jsonToModel(jsonObject) {
    return new Ad(
      jsonObject.id,
      jsonObject.title,
      jsonObject.photoUrl,
      jsonObject.description,
      jsonObject.createdAt,
      jsonObject.isActive,
      jsonObject.compensatory,
      jsonObject.contacts,
      jsonObject.location,
      jsonObject.requirements,
      jsonObject.settings,
    );
  }
}
