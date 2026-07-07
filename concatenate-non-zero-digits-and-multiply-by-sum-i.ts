function sumAndMultiply(n: number): number {
  let sum = 0;
  let x = "";
  while (n > 0) {
    const n_last = Math.floor(n % 10);
    if (n_last !== 0) {
      x = n_last + x;
      sum = sum + n_last;
    }
    n = Math.floor(n / 10);
  }
  const x_num = x ? parseInt(x) : 0;
  return x_num === 0 ? 0 : x_num * sum;
}
