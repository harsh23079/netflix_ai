export function validateEmail(inputText) {
  var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (mailformat.test(inputText)) {
    return true;
  } else {
    return false;
  }
}
export const validatePassword = (inputPassword) => {
  var passwordFormat =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  return passwordFormat.test(inputPassword);
};
