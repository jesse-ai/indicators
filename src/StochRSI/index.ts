import SMA from '../SMA'

/**
 * Calculates Stochastic value
 * note: to use, you need to smooth the value with below function.
 * read more: https://www.tradingview.com/wiki/Stochastic_RSI_(STOCH_RSI)#CALCULATION
 *
 * @export
 * @param {number[]} values
 * @param {number} period
 * @returns
 */
export function stoch(values: number[], period: number) {
    if (values.length !== period) {
        throw new Error(`Number of values(${values.length}) must be the same as the K period(${period}).`)
    }

    const lowest: number = Math.min(...values)
    const highest: number = Math.max(...values)
    const current: number = values[values.length - 1]

    return ((current - lowest) / (highest - lowest)) * 100
}

/**
 * Calculates K in stochasticRSI
 *
 * @export
 * @param {number[]} stochs
 * @param {number} kPeriod
 * @returns
 */
export function smoothedStoch(stochs: number[], kPeriod: number) {
    if (stochs.length !== kPeriod) {
        throw new Error(`Number of stochs(${stochs.length}) must be the same as the K period(${kPeriod}).`)
    }

    return SMA(stochs, kPeriod)
}
