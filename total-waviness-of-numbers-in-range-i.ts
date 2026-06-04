function totalWaviness(num1: number, num2: number): number {
  let count = 0;
  for (let num = num1; num <= num2; num++) {
    const str = String(num);

    for (let i = 1; i < str.length - 1; i++) {
      if (
        (str[i] < str[i - 1] && str[i] < str[i + 1]) ||
        (str[i] > str[i - 1] && str[i] > str[i + 1])
      ) {
        count++;
      }
    }
  }

  return count;
}
