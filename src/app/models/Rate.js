import PropTypes from 'prop-types';

export default class Rate {
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
    if (this.isContractual) {
      return '';
    }

    if (this.fixedRate && this.fixedRate.length > 0) {
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
