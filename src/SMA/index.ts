/**
 * Simple Moving Average (SMA)
 *
 * @export
 * @param {number[]} prices
 * @param {number} period
 * @returns {number}
 */
export default function SMA(prices: number[], period: number): number {
    if (prices.length !== period) {
        throw new Error('Number of values must be the same as the period.')
    }

    let sum: number = 0

    for (let index = 0; index < prices.length; index++) {
        sum += prices[index]
    }

    return sum / period
}
