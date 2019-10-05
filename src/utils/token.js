/**
 *
 * @param {String} key - key name for value
 * @param {String} value - value t0 be stored
 * @param {Date} days - duration to store the cookie in days
 */

const key = process.env.REACT_APP_COOKIE_NAME;

export const createToken = value => {
  // Creates token
  localStorage.setItem(key, value)
  return;
};

export const readToken = () => {
  //get token
  return localStorage.getItem(key);
};

export const eraseToken = () => {
  localStorage.removeItem(key);
  localStorage.removeItem("user");
  return;
};
