import http from "./httpService";
const apiUrl = "http://localhost:4857/";
const apiEndpoint = apiUrl + "user";

/**
 * Posts the login data
 *
 * @param {Object} data The login information
 * @return {Object} A JWT token
 */
export function login(data) {
  return http.post(`${apiEndpoint}/login`, data);
}

/**
 * Posts the login data
 *
 * @param {String} userId the id of the user
 * @return {Object} A JWT token
 */
export function logout(userId) {
  return http.post(`${apiEndpoint}/${userId}/logout`);
}

/**
 * Creates a user account
 *
 * @param {Object} data The information to create an account
 * @return {Object} The created account
 */
export function createAccount(data) {
  return http.post(`${apiEndpoint}/createAccount`, data);
}

/**
 * Gets all the user accounts in the database
 *
 * @return {Object} A list of accounts in the databse
 */
export function getUsers() {
  return http.get(`${apiEndpoint}/users`);
}

/**
 * Creates a tracking entry in the database
 *
 * @param {data} The information of the tracking entry
 * @return {Object} The created tracking entry
 */

export function createTracking(data) {
  return http.post(`${apiEndpoint}/tracking`, data);
}

// Creates a New Product
export function products(data) {
  return http.post(`${apiEndpoint}/products`, data);
}

// Products get by id
export function productId(data) {
  return http.get(`${apiEndpoint}/products/:id`, data);
}

// Good Products
export function goodProducts(data) {
  return http.get(
    `${apiEndpoint}/products/:id/good/:tracking/:date/:area:/shift/:operator`,
    data
  );
}

// Bad Products
export function badProducts(data) {
  return http.get(
    `${apiEndpoint}/products/:id/bad/:tracking/:date/:area:/shift/:operator`,
    data
  );
}

// Target Products
export function targetProducts(data) {
  return http.get(
    `${apiEndpoint}/products/:id/target/:tracking/:date/:area:/shift/:operator`,
    data
  );
}

// Actual Products
export function actualProducts(data) {
  return http.get(
    `${apiEndpoint}/products/:id/actual/:tracking/:date/:area:/shift/:operator`,
    data
  );
}

// Finished Products
export function finishedProducts(data) {
  return http.get(
    `${apiEndpoint}/products/:id/finished/:tracking/:date/:area:/shift/:operator`,
    data
  );
}

// Create Safety report
export function safety(data) {
  return http.post(`${apiEndpoint}/safety`, data);
}

// Return all safety reports
export function getSafety(data) {
  return http.post(`${apiEndpoint}/safety/:type/:area/:date`, data);
}

// Tracking
export function track(data) {
  return http.post(`${apiEndpoint}/tracking`, data);
}

// Get Tracking
export function tracking(data) {
  return http.get(`${apiEndpoint}/tracking/:date/:area/:shift/:operator`, data);
}