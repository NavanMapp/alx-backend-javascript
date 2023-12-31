import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));
  const results = await Promise.allSettled(promises);
  const resultArray = results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
  return resultArray;
}
export default handleProfileSignup;
