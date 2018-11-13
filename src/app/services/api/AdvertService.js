/* eslint-disable import/prefer-default-export */
import fetch from 'cross-fetch';
import {
  failedFetchingAdverts,
  receiveAdverts,
  requestAdverts,
} from '../../redux/actions/advert';
import { LOAD_ADVERTS_URL } from './ApiService';

/** Fetches adverts. */
export const fetchAdverts = () => (dispatch) => {
  dispatch(requestAdverts());
  return fetch(LOAD_ADVERTS_URL)
    .then(
      response => response.json(),
      error => dispatch(failedFetchingAdverts(error)),
    )
    .then(json => dispatch(receiveAdverts(json)));
};
