/**
 * Calculates the fibonacci retracements for given start and
 * end points If calculating for up-trend start should
 * be low and end should be high and vice versa
 *
 * @export
 * @param {number} start
 * @param {number} end
 * @returns
 */
export default function fibonacci(start: number, end: number) {
    let levels: number[] = [0, 23.6, 38.2, 50, 61.8, 78.6, 100]
    let retracements: number[]

    if (start < end) {
        retracements = levels.map(level => {
            let calculated: number = end - (Math.abs(start - end) * level) / 100
            return calculated > 0 ? calculated : 0
        })
    } else {
        retracements = levels.map(level => {
            let calculated: number = end + (Math.abs(start - end) * level) / 100
            return calculated > 0 ? calculated : 0
        })
    }

    return {
        0: retracements[0],
        23.6: retracements[1],
        38.2: retracements[2],
        50: retracements[3],
        61.8: retracements[4],
        78.6: retracements[5],
        100: retracements[6]
    }
}
