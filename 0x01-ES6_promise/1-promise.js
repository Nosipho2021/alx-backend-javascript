/**
 * Simulates an API call that returns a promise.
 * @param {boolean} success - Determines whether the API call should succeed or fail.
 * @returns {Promise<object>} A promise that resolves with an object if successful, or rejects with an error.
 */
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
