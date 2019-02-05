import SMA from ".";
import _ from 'lodash';

it('Should return current SMA of values[]', () => {
    let prices1: number[] = [22.27, 22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29];
    expect(_.round(SMA(prices1, 10), 2)).toBe(22.22);

    let prices2: number[] = [22.19, 22.08, 22.17, 22.18, 22.13, 22.23, 22.43, 22.24, 22.29, 22.15];
    expect(_.round(SMA(prices2, 10), 2)).toBe(22.21);

    let prices3: number[] = [91.99, 102.65, 110.77, 109.23, 117.11129288, 119.65, 113.64, 118.52].reverse();
    expect(_.round(SMA(prices3, 8), 1)).toBe(110.4);
});