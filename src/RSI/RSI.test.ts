import RSI, { averageLossAndGain, quickRSI } from '.'
import _ from 'lodash'

const close: number[] = [44.34, 44.09, 44.15, 43.61, 44.33, 44.83, 45.1, 45.42, 45.84, 46.08, 45.89, 46.03, 45.61, 46.28]

it('Should return the current RSI based on prices over the period', () => {
    expect(_.round(RSI(close, 14), 2)).toBe(70.46)
})

it('Should return the current RSI based on previous info', () => {
    const { averageGain, averageLoss }: { averageGain: number; averageLoss: number } = averageLossAndGain(close)

    let lastRSI: number = quickRSI(46, close[close.length - 1], 14, averageGain, averageLoss)

    expect(_.round(lastRSI, 2)).toBe(66.25)
})
