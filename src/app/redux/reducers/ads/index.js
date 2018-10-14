import { LOAD_ADS } from '../../actions/ad/index';
import mockJsonArrayOfAds from '../../../mockData/ads.json';
import Ad from '../../../models/Ad';

/* Initialize state using mock data from json file */
const initState = mockJsonArrayOfAds.map(o => Ad.jsonToModel(o));

const ads = (state = initState, action) => {
  if (action.type === LOAD_ADS) {
    return action.payload;
  }

  return state;
};

export default ads;
