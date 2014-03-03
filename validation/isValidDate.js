/**
 * Check if a valid date string.
 * Date range is from Jan 1st, 1900 to Dec 31st, 2099.
 * string format is "dd/mm/yyyy", e.g. "10/13/2013"
 */
function isValidDate(str) {
    var regexDate = /(?:0[1-9]|[12][0-9]|[3][01])\/(?:0[1-9]|1[0-2])\/(?:19|20\d{2})/;
    return regexDate.test(str);
}
