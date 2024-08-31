/**
 * Handles profile signup by resolving multiple promises.
 * Collectively resolves the promises returned by uploadPhoto and createUser functions.
 * Logs the response body from uploadPhoto and firstName, lastName from createUser to the console.
 * Logs an error message if any of the promises fail.
 * 
 * @returns {void} - This function does not return anything.
 */

import { uploadPhoto, createUser } from './utils.js';


function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}


export default handleProfileSignup;
