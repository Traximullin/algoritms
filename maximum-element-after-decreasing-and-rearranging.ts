const maximumElementAfterDecrementingAndRearranging = (arr: number[]): number =>
  arr
    .sort((a, b) => a - b)
    .slice(1)
    .reduce((res, val) => (val >= res + 1 ? res + 1 : res), 1);
