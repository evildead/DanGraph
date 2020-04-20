/**
 * Get a random integer number between min and max (included)
 * @param {number} min minimum number
 * @param {number} max maximum number
 * @returns {number} an integer between min and max (included)
 */
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
