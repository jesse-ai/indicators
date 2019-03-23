import RSI, { averageLossAndGain, quickRSI } from '.'
import _ from 'lodash'

const close: number[] = [44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.1, 45.42, 45.84, 46.08, 45.89, 46.03, 45.61, 46.28]

it('Should return the current RSI based on prices over the period', () => {
    expect(_.round(RSI(close, 14).RSI, 2)).toBe(70.46)
})

it('Should return the current RSI based on previous info', () => {
    const { averageGain, averageLoss }: { averageGain: number; averageLoss: number } = averageLossAndGain(close)

    expect(_.round(quickRSI(46, close[close.length - 1], 14, averageGain, averageLoss).RSI, 2)).toBe(66.25)
})

it('Should return RSI (test with a second pair or values)', () => {
    const values: number[] = 
    [138.10, 137.96, 137.03, 137.04, 136.99, 137.66, 137.1, 135.76].reverse()
console.log(values.slice(0, 5))
    let rsi = RSI(values.slice(0, 5), 5)
    expect(Math.round(rsi.RSI)).toBe(Math.round(31))

    rsi = quickRSI(82.84, 83.15, 5, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(64.93))

    rsi = quickRSI(83.99, 82.84, 5, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(75.94))
})
