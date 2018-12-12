import PropTypes from 'prop-types';

export default class Rate {
  static propTypes = {
    fixedRate: PropTypes.number,
    maxRate: PropTypes.number,
    minRate: PropTypes.number,
    currency: PropTypes.string,
    isContractual: PropTypes.bool,
  };

  constructor(fixedRate, maxRate, minRate, currency, isContractual) {
    this.fixedRate = fixedRate;
    this.maxRate = maxRate;
    this.minRate = minRate;
    this.currency = currency;
    this.isContractual = isContractual;
  }

  /**
   * Returns rate in string format.
   *
   * @example Fon each rate type:
   *    Contractual => Empty string
   *    Fixed => 200$
   *    Range => 100-300$
   */
  toString() {
    if (this.isContractual) {
      return '';
    }

    if (this.fixedRate) {
      return `${this.fixedRate}${this.currency}`;
    }

    return `${this.minRate}-${this.maxRate}${this.currency}`;
  }

  static toModel(object) {
    if (!object) {
      return null;
    }
    return new Rate(
      object.fixedRate,
      object.maxRate,
      object.minRate,
      object.currency,
      object.isContractual,
    );
  }
}
