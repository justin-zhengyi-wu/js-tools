/**
 * Generate a random number within a range.
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @return A random number within the range.
 */
function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
