/**
 * Creates a promise that resolves with a user object containing firstName and lastName.
 * 
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<object>} A promise that resolves with an object containing firstName and lastName.
 */

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName
  });
}

export default signUpUser
