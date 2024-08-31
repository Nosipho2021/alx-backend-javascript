import { uploadPhoto, createUser } from './utils';

/**
 * Calls uploadPhoto and createUser functions and returns an object with their responses.
 * If any of the functions fail, returns an object with null values.
 * @returns {Object} An object containing the responses from the uploadPhoto and createUser functions.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
