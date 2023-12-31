import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoData, userData]) => {
      console.log(`${photoData.firstName} ${userData.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
