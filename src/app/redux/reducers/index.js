import { combineReducers } from 'redux';
import adverts from './advert';
import language from './language';
import location from './location';

/**
 * The project reducers.
 */
export default combineReducers({
  adverts,
  language,
  location,
});
