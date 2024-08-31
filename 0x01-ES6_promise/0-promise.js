/**
 * Simulates an API call that returns a Promise.
 * @param {boolean} shouldSucceed - Determines whether the API call should succeed or fail.
 * @returns {Promise<object>} A promise that resolves with a success response or rejects with an error.
 */
function getFullResponseFromAPI(shouldSucceed) {
  return new Promise((resolve, reject) => {
    if (typeof shouldSucceed !== 'boolean') {
      reject(Error('Invalid input: shouldSucceed must be a boolean'));
      return;
    }

    if (shouldSucceed) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
