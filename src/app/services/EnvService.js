const LOCAL_HOST = 'http://35.188.141.110:80/api';
const PROD_HOST = '/api';

/**
 * Env Service provides all functions related to project environment.
 */
export default class EnvService {
  /**
   * Checks if is production environment.
   * @return {boolean}
   * @public
   */
  static isProdEnv() {
    return process.env.NODE_ENV === 'production';
  }

  /**
   * Returns host address for current environment.
   * @return {string}
   * @public
   */
  static getCurrentHost() {
    return this.isProdEnv() ? PROD_HOST : LOCAL_HOST;
  }
}
