import PropTypes from 'prop-types';

export default class Contacts {
  static propTypes = {
    userId: PropTypes.string,
    companyId: PropTypes.string,
    email: PropTypes.string,
    person: PropTypes.string,
    phone: PropTypes.string,
  };

  constructor(userId, companyId, email, person, phone) {
    this.userId = userId;
    this.companyId = companyId;
    this.email = email;
    this.person = person;
    this.phone = phone;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new Contacts(
      object.userId,
      object.companyId,
      object.email,
      object.person,
      object.phone,
    );
  }
}
