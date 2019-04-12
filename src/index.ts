import SMA from './SMA'
import EMA, { quickEMA } from './EMA'
import RSI, { quickRSI } from './RSI'
import { stoch, smoothedStoch } from './StochRSI'

const Indicators = {
    SMA,
    EMA,
    quickEMA,
    RSI,
    quickRSI,
    stoch,
    smoothedStoch
}

export default Indicators
