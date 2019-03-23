import RSI, { averageLossAndGain, quickRSI } from '../RSI'
import StockRSI from './index'
import { RSIInterface } from '../RSI/types'

const values: number[] = [
    137.03,
    135.76,
    141.61,
    142.1,
    141.61,
    141.94,
    142.17,
    141.14,
    140.65851755,
    141.38,
    141.46,
    140.92,
    140.92,
    140.72,
    141.64,
    141.3,
    141.33,
    140.99,
    141.07,
    140.45,
    140.32,
    141.15,
    140.6,
    140.73150019,
    140.34,
    140,
    140.08,
    140.8
].reverse()

it('Should return the current StockRSI', () => {
    expect(values.length).toBe(28)

    const RSIs: number[] = []
    const period: number = 14

    let currentRSI: RSIInterface = RSI(values.slice(0, period), period)
    RSIs.push(currentRSI.RSI)

    for (let i = period; i < 28; i++) {
        currentRSI = quickRSI(values[i], values[i - 1], period, currentRSI.averageGain, currentRSI.averageLoss)
        RSIs.push(currentRSI.RSI)
    }

    expect(RSIs.length).toBe(15)

    expect(StockRSI(RSIs)).toBe(44.471222157460431)
})
