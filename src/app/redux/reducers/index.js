import { combineReducers } from 'redux';
import adverts from './advert';
import language from './language';

/**
 * The project reducers.
 */
export default combineReducers({
  adverts,
  language,
});
