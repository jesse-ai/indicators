import EMA, { quickEMA } from '.'
import _ from 'lodash'

it('Should return current EMA of values[]', () => {
    let prices1: number[] = [
        429.74,
        493.85,
        495.92,
        502.45,
        534.03,
        511.29,
        503.13,
        525.56,
        566.92,
        616.44,
        604.56,
        621.11,
        643.97,
        702.99,
        617.84,
        661.18,
        643.49,
        683.03,
        689.93,
        670.64,
        671.06,
        688,
        779.39,
        785.52,
        819.68,
        793.79,
        752.2,
        747.93,
        751.86,
        723.38,
        677.99,
        683.45,
        728.83,
        727.41,
        705.07,
        707.1,
        667.84,
        693.61,
        696.2,
        715.11,
        696.13,
        640,
        576.9,
        602.52,
        584.39,
        585.6,
        569,
        512,
        567.27,
        557,
        577,
        579.24,
        590.44,
        619.39,
        591.09,
        608.71,
        606.66,
        605.39,
        599.9,
        593.19,
        523.55,
        530.78,
        493.74,
        476.15,
        519.9,
        487.27,
        496.79,
        497,
        517.64,
        538.47,
        536.25878835,
        526.11,
        461.77,
        473.48,
        455.32,
        459.01,
        429.32,
        441.66,
        420.32,
        435.7,
        453.85,
        452.02,
        476.8,
        462,
        467.47,
        467.52,
        470.36,
        486.71,
        486.09,
        471.56,
        432.44,
        445.15,
        430.99,
        432.16,
        433.5,
        449.9,
        479.09,
        499.11,
        478.96,
        468.63,
        449.13,
        460.74,
        457.99,
        449.52,
        479.33,
        471.89,
        462.29350607,
        470.24,
        469.14,
        466.3,
        456.63,
        432.17,
        420.07,
        410.9,
        417.66,
        406.99,
        408.66,
        404.88,
        377.82,
        355.63,
        363.27,
        331.84,
        317.85,
        318.16,
        283.92,
        278.39,
        281.34,
        286.85,
        317.68,
        294.32,
        299.21,
        270.41,
        281.2,
        270.51,
        275.87997897,
        281.28,
        277.29,
        274.33043838,
        288.17,
        295.59,
        288.75,
        284.1,
        281.6,
        295.73,
        295.35,
        289.27,
        285.34,
        228.44,
        229.72,
        215.17,
        196.7,
        196.02,
        197.37,
        185.17465906,
        183.17,
        211.09,
        208.49,
        221.48,
        220.18,
        196.03,
        208.36,
        209.83,
        225,
        247.81,
        240.99,
        244.7,
        227.8411289,
        219.25,
        214.26,
        229.24,
        221.92,
        231.52,
        232.96,
        231.49,
        225.97,
        220.74,
        222.37,
        228.54440467,
        225.31,
        226.29,
        230.20395475,
        228.58,
        226.7,
        191.17,
        197.02,
        201.22,
        196.75,
        214.31,
        215.13,
        212.8,
        206.07,
        204.92,
        208.17,
        207.28115664,
        206.56,
        205.89912255,
        205.25,
        203.68,
        205.03475849,
        204.23,
        205.01,
        196.9,
        197.33,
        198.7,
        199.86,
        202.23,
        200.3,
        212.3,
        210.82603059,
        220.84,
        218.99,
        212.71,
        211.01,
        213.19,
        212.99724894,
        212.67760477,
        209.85,
        187.2,
        184.15,
        176.99,
        175.9,
        178.99,
        150.96,
        133.85,
        138.18,
        126.32,
        125.23,
        114.79,
        118.73,
        110.74409879,
        111.72,
        124.04,
        118.52,
        113.64,
        119.65,
        117.11129288,
        109.23,
        110.77,
        102.65,
        91.99
    ]
    expect(_.round(EMA(prices1, 8), 4)).toBe(108.5462)
})

it('Should return current EMA based on previous EMA and current price', () => {
    let prices2: number[] = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let preLastEMA: number = EMA(prices2, 8)
    let lastEMA: number = quickEMA(15, 8, preLastEMA)

    expect(_.round(lastEMA, 2)).toBe(11.47)
})
