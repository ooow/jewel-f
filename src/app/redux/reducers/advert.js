import {
  FAILED_FETCHING_ADVERTS,
  RECEIVE_ADVERTS,
  REQUEST_ADVERTS,
} from '../actions/advert';
import mockJsonArrayOfAds from '../../mockData/ads.json';
import Advert from '../../models/Advert';

/** Initializes state using mock data from json file. */
const initState = {
  isFetching: false,
  items: mockJsonArrayOfAds.map(Advert.jsonToModel),
};

const adverts = (state = initState, action) => {
  switch (action.type) {
    case REQUEST_ADVERTS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ADVERTS:
      return {
        ...state,
        isFetching: false,
        items: action.adverts,
        lastUpdated: action.receivedAt,
      };
    case FAILED_FETCHING_ADVERTS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default adverts;
