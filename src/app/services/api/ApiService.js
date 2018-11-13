import EnvService from '../EnvService';

const CURRENT_HOST = EnvService.getCurrentHost();

/**
 * This file contains all project API urls.
 */
export const LOAD_ADVERTS_URL = `${CURRENT_HOST}/ads`;
export const SAVE_ADVERT_URL = `${CURRENT_HOST}/ad/save`;
export const DELETE_ADVERT_URL = `${CURRENT_HOST}/ad/delete`;
