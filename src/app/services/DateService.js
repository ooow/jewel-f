const NOT_EXIST_MESSAGE = 'Date not exist';

/**
 * Date Service provides all functions for converting or formatting date.
 */
export default class DateService {
  /**
   * Converts date in milliseconds to date in `dd.mm.yyyy` format.
   * @param {number} date for converting
   * @return {string}
   */
  static msToViewText(date) {
    if (date) {
      return new Date(date)
        .toJSON()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.');
    }
    return NOT_EXIST_MESSAGE;
  }
}
