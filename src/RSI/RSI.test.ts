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

it('Should see if quickRSI and RSI return exactly the same on a larger dataset', () => {
    const values1: number[] = [81.59, 81.06, 82.87, 83, 83.61, 83.15]
    const RSIs1: number[] = []

    let rsi = RSI(values1, 6)
    expect(Math.round(rsi.RSI)).toBe(Math.round(72.03))
    RSIs1.push(rsi.RSI)

    rsi = quickRSI(82.84, 83.15, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(64.93))
    RSIs1.push(rsi.RSI)

    rsi = quickRSI(83.99, 82.84, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(75.94))
    RSIs1.push(rsi.RSI)
    
    rsi = quickRSI(84.55, 83.99, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(79))
    RSIs1.push(rsi.RSI)
    
    rsi = quickRSI(84.36, 84.55, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(74.71))
    RSIs1.push(rsi.RSI)
    
    rsi = quickRSI(85.53, 84.36, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(82))
    RSIs1.push(rsi.RSI)
    
    rsi = quickRSI(86.54, 85.53, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(86))
    RSIs1.push(rsi.RSI)
    
    rsi = quickRSI(86.89, 86.54, 6, rsi.averageGain, rsi.averageLoss)
    expect(Math.round(rsi.RSI)).toBe(Math.round(88))
    RSIs1.push(rsi.RSI)
})
