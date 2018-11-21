import { CHANGE_LANGUAGE } from '../actions/language';
import LocalStorageService from '../../services/LocalStoreService';
import Language from '../../models/Language';

/**
 *  Tries to read language from the local store,
 *  if not it sets default as English
 */
let initState;
const storedLanguage = LocalStorageService.getLanguage();

if (storedLanguage) {
  initState = storedLanguage;
} else {
  const defaultLanguage = new Language('en', 'English', true);
  initState = defaultLanguage;
  LocalStorageService.setLanguage(defaultLanguage);
}

const language = (state = initState, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    LocalStorageService.setLanguage(action.language);
    return action.language;
  }
  return state;
};

export default language;
