import window from 'global/window';
import Language from '../models/Language';
import Location from '../models/Location';

/**
 * Tries to get value from local storage for provided key.
 * @param key: {string}
 * @private
 */
const read = (key) => {
  let object;
  try {
    object = JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    /** TODO: Handle possible error. */
    return null;
  }
  return object;
};

/**
 * Saves to local storage object with key.
 * @param key: {string}
 * @param value: {any}
 * @private
 */
const write = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * LocalStorage service provides methods for getting/setting the project
 * variables from global local storage.
 */
export default class LocalStoreService {
  /**
   * Saves provided language into local storage.
   * @param language: {!Language}
   * @public
   */
  static setLanguage = (language) => {
    write('language', language);
  };

  /**
   * Reads language from local storage.
   * @return {?Language}
   * @public
   */
  static getLanguage = () => Language.toModel(read('language'));

  /**
   * Saves provided location into local storage.
   * @param location: {!Location}
   * @public
   */
  static setLocation = (location) => {
    write('location', location);
  };

  /**
   * Reads location from local storage.
   * @return {?Location}
   * @public
   */
  static getLocation = () => Location.toModel(read('location'));
}
