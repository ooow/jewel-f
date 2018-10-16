import PropTypes from 'prop-types';

export default class Compensatory {
  static propTypes = {
    fixedRate: PropTypes.string,
    minRate: PropTypes.string,
    maxRate: PropTypes.string,
    isContractual: PropTypes.bool,
    currency: PropTypes.string,
  };

  constructor(fixedRate, minRate, maxRate, isContractual, currency) {
    this.fixedRate = fixedRate;
    this.minRate = minRate;
    this.maxRate = maxRate;
    this.isContractual = isContractual;
    this.currency = currency;
  }

  toString() {
    return `fixedRate: ${this.fixedRate} 
    minRate: ${this.minRate} 
    maxRate: ${this.maxRate} 
    isContractual: ${this.isContractual} 
    currency: ${this.currency}`;
  }
}
