import RSI, { averageLossAndGain, quickRSI } from '../RSI'
import StockRSI from './index'
import { RSIInterface } from '../RSI/types'

const values: number[] = [81.59, 81.06, 82.87, 83, 83.61, 83.15, 82.84, 83.99, 84.55, 84.36]

it('Should return the current StockRSI', () => {
    expect(values.length).toBe(10)

    const RSIs: number[] = []
    const period: number = 5

    let currentRSI: RSIInterface = RSI(values.slice(0, period), period)
    RSIs.push(currentRSI.RSI)

    for (let i = period; i < 10; i++) {
        currentRSI = quickRSI(values[i], values[i - 1], period, currentRSI.averageGain, currentRSI.averageLoss)

        RSIs.push(currentRSI.RSI)
    }

    expect(RSIs.length).toBe(6)

    expect(StockRSI(RSIs)).toBe(0.66)
})
