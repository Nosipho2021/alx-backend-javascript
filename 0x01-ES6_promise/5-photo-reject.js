/**
 * Returns a promise that rejects with an error message stating that the file cannot be processed.
 * 
 * @param {string} fileName - The name of the file to be processed.
 * @returns {Promise<never>} A promise that rejects with an error.
 */

export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
