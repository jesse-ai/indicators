/**
 * RSI (Relative Strength Index)
 * https://www.tradingview.com/wiki/Relative_Strength_Index_(RSI)
 *
 * @export
 * @param {number[]} values
 * @param {number} period
 * @returns {number}
 */
export default function RSI(values: number[], period: number): number {
    if (values.length !== period) {
        throw new Error('Number of values must be the same as the period.')
    }

    const { averageGain, averageLoss }: { averageGain: number; averageLoss: number } = averageLossAndGain(values)

    const RS: number = averageGain / averageLoss

    const RSI: number = 100 - 100 / (1 + RS)

    return RSI
}

/**
 * RMI calculation that uses the last known data to boost performance.
 *
 * @export
 * @param {number} currentValue
 * @param {number} previousValue
 * @param {number} period
 * @param {number} previousAverageGain
 * @param {number} previousAverageLoss
 * @returns {number}
 */
export function quickRSI(currentValue: number, previousValue: number, period: number, previousAverageGain: number, previousAverageLoss: number): number {
    const change: number = currentValue - previousValue
    let currentGain: number = 0
    let currentLoss: number = 0

    if (change > 0) {
        currentGain += change
    } else {
        currentLoss += Math.abs(change)
    }

    return 100 - 100 / (1 + (previousAverageGain * (period - 1) + currentGain) / (previousAverageLoss * (period - 1) + currentLoss))
}

/**
 * Calculates the averageLoss and AverageGain
 *
 * @export
 * @param {number[]} values
 * @returns
 */
export function averageLossAndGain(values: number[]) {
    let gains: number = 0
    let losses: number = 0
    const period: number = values.length

    for (let i = 1; i < values.length; i++) {
        const change: number = values[i] - values[i - 1]
        if (change > 0) {
            gains += change
        } else {
            losses += Math.abs(change)
        }
    }

    const averageGain: number = gains / period
    const averageLoss: number = losses / period

    return { averageGain, averageLoss }
}
