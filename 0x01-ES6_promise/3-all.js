/**
 * Handles profile signup by resolving multiple promises.
 * Collectively resolves the promises returned by uploadPhoto and createUser functions.
 * Logs the response body from uploadPhoto and firstName, lastName from createUser to the console.
 * Logs an error message if any of the promises fail.
 * 
 * @returns {void} - This function does not return anything.
 */

import { createUser, uploadPhoto } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

export default handleProfileSignup;
