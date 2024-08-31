/**
 * Divides the numerator by the denominator.
 * Throws an error if the denominator is zero.
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @returns {number} The result of the division.
 * @throws {Error} When denominator is zero.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
