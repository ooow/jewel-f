/* eslint-disable import/prefer-default-export */
import fetch from 'cross-fetch';
import {
  failedFetchingAdverts,
  receiveAdverts,
  requestAdverts,
} from '../../redux/actions/advert';
import { LOAD_ADVERTS_URL } from './ApiService';
import Advert from '../../models/Advert';

/** Fetches adverts. */
export const fetchAdverts = () => (dispatch) => {
  dispatch(requestAdverts());
  return fetch(LOAD_ADVERTS_URL)
    .then(response => response.json())
    .then(adverts => dispatch(receiveAdverts(adverts.map(Advert.jsonToModel))))
    .catch(error => dispatch(failedFetchingAdverts(error)));
};
