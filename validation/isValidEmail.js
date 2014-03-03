/**
 * Check if a valid email string.
 * e.g. john@somewhere.com, john.doe@somewhere.com
 */
function isValidEmail(str) {
    var regexEmail = /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/;
    return regexEmail.test(str);
}
