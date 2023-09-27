import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    console.error(error); // Log the error (optional)
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;