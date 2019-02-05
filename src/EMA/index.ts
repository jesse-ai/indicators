import SMA from "../SMA";

/**
 * Exponential Moving Average (EMA)
 *
 * @param {number[]} prices
 * @param {number} period
 * @returns {number}
 */
export default function EMA(prices: number[], period: number): number {
    let EM: number = SMA(prices.slice(0, period), period);
    let F: number = 2 / (period + 1);

    for (let index = 0; index < prices.slice(period).length; index++) {
        EM = EM + F * (prices.slice(period)[index] - EM);
    }

    return EM;
}