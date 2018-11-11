export const FAILED_FETCHING_ADVERTS = 'FAILED_FETCHING_ADVERTS';
export const RECEIVE_ADVERTS = 'RECEIVE_ADVERTS';
export const REQUEST_ADVERTS = 'REQUEST_ADVERTS';

export const requestAdverts = () => ({
  type: REQUEST_ADVERTS,
});

export const receiveAdverts = json => ({
  type: RECEIVE_ADVERTS,
  adverts: json.data.adverts,
  receivedAt: Date.now(),
});

export const failedFetchingAdverts = error => ({
  type: FAILED_FETCHING_ADVERTS,
  error,
});
