export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new error(`${fileName} cannot be processed`));
  });
}