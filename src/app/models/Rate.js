import PropTypes from 'prop-types';

export default class Rate {
  static propTypes = {
    currency: PropTypes.string,
    fixedRate: PropTypes.number,
    isContractual: PropTypes.bool,
    maxRate: PropTypes.number,
    minRate: PropTypes.number,
  };

  constructor(fixedRate, minRate, maxRate, isContractual, currency) {
    this.fixedRate = fixedRate;
    this.minRate = minRate;
    this.maxRate = maxRate;
    this.isContractual = isContractual;
    this.currency = currency;
  }

  toString() {
    if (this.isContractual) {
      return '';
    }

    if (this.fixedRate) {
      return `${this.fixedRate}${this.currency}`;
    }

    return `${this.minRate}-${this.maxRate}${this.currency}`;
  }

  static jsonToModel(jsonObject) {
    return new Rate(
      jsonObject.fixedRate,
      jsonObject.minRate,
      jsonObject.maxRate,
      jsonObject.isContractual,
      jsonObject.currency,
    );
  }
}
