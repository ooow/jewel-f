import PropTypes from 'prop-types';

export default class Compensatory {
  static propTypes = {
    phone: PropTypes.string,
    person: PropTypes.string,
    userId: PropTypes.number,
    companyId: PropTypes.number,
    email: PropTypes.string,
  };

  constructor(phone, person, userId, companyId, email) {
    this.phone = phone;
    this.person = person;
    this.userId = userId;
    this.companyId = companyId;
    this.email = email;
  }

  toString() {
    return `phone: ${this.phone} 
    person: ${this.person} 
    userId: ${this.userId} 
    companyId: ${this.companyId} 
    email: ${this.email}`;
  }
}
