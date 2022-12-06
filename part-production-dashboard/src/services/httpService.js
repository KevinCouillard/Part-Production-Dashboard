import http from "./httpService";
const apiUrl = "http://localhost:4857/"
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