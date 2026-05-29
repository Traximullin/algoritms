function minElement(nums: number[]): number {
  return Math.min(
    ...nums.map((num) => {
      let sum = 0;
      while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }

      return sum;
    }),
  );
}
