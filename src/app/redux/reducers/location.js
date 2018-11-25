import { CHANGE_LOCATION } from '../actions/location';
import LocalStorageService from '../../services/LocalStoreService';
import Location from '../../models/Location';

/**
 *  Tries to read location from the local store,
 *  if not it sets default as Poland, Warsaw.
 */
let initState;
const storedLocation = LocalStorageService.getLocation();

if (storedLocation) {
  initState = storedLocation;
} else {
  const defaultLocation = new Location('Poland', 'Warsaw');
  initState = defaultLocation;
  LocalStorageService.setLocation(defaultLocation);
}

const location = (state = initState, action) => {
  if (action.type === CHANGE_LOCATION) {
    LocalStorageService.setLocation(action.location);
    return action.location;
  }
  return state;
};

export default location;
