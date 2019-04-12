import RSI, { quickRSI } from '../RSI'
import { RSIInterface } from '../RSI/types'
import { stoch, smoothedStoch } from '.'
import values, { rawCandles, expectedRSI, expectedSRSI } from './testData'

it('Should return the current StockRSI', () => {
    const RSIs: number[] = []
    const stochs: number[] = []
    const SRSIs: number[] = []
    const period: number = 14
    const smoothK: number = 3

    let currentRSI: RSIInterface = RSI(values.slice(0, period), period)
    RSIs.push(currentRSI.RSI)

    for (let i = period; i < values.length; i++) {
        currentRSI = quickRSI(values[i], values[i - 1], period, currentRSI.averageGain, currentRSI.averageLoss)
        RSIs.push(currentRSI.RSI)

        if (RSIs.length >= period) {
            stochs.push(stoch(RSIs.slice(i - (period - 1) * 2), period))
        }

        if (stochs.length >= smoothK) {
            SRSIs.push(smoothedStoch(stochs.slice(i - period * 2), smoothK))
        }
    }

    expect(RSIs.length).toBe(values.length - (period - 1))
    expect(SRSIs.length).toBe(rawCandles.length - period * 2)

    // tested manually first, with TradingView
    expect(RSIs).toEqual(expectedRSI)
    expect(SRSIs).toEqual(expectedSRSI)
})
