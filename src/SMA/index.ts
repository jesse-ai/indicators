/**
 * Simple Moving Average (SMA)
 *
 * @export
 * @param {number[]} values
 * @param {number} period
 * @returns {number}
 */
export default function SMA(values: number[], period: number): number {
    if (values.length !== period) {
        throw new Error(`Number of values(${values.length}) must be the same as the period(${period}).`)
    }

    let sum: number = 0

    for (let index = 0; index < values.length; index++) {
        sum += values[index]
    }

    return sum / period
}
