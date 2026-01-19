function divide(dividend: number, divisor: number): number {
  let div = dividend / divisor;

  return div > 0
    ? Math.min(Math.floor(div), 2147483647)
    : Math.max(Math.ceil(div), -2147483648);
}
