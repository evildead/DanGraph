/**
 * randomIntFromInterval
 * @param min minimum number
 * @param max maximum number
 * @returns an integer between min and max (included)
 */
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
