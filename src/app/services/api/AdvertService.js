/* eslint-disable import/prefer-default-export */
import fetch from 'cross-fetch';
import {
  failedFetchingAdverts,
  receiveAdverts,
  requestAdverts,
} from '../../redux/actions/advert';

// TODO: Use ApiService crated in (https://github.com/ooow/jewel-f/issues/55).
const POST_ADVERTS_URL = 'http://localhost:8080/ads';

/** Fetches adverts. */
export const fetchAdverts = () => (dispatch) => {
  dispatch(requestAdverts());
  return fetch(POST_ADVERTS_URL)
    .then(
      response => response.json(),
      error => dispatch(failedFetchingAdverts(error)),
    )
    .then(json => dispatch(receiveAdverts(json)));
};
