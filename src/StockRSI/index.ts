// https://www.investopedia.com/terms/s/stochrsi.asp
export default function StockRSI(RSIs: number[]): number {
    const lowestRSI: number = Math.min(...RSIs.slice(0, (RSIs.length - 1)))
    const highestRSI: number = Math.max(...RSIs.slice(0, RSIs.length - 1))
    const currentRSI: number = RSIs[RSIs.length - 1]

    return ((currentRSI - lowestRSI) / (highestRSI - lowestRSI)) * 100
}
