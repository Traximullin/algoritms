function largestNumber(nums: number[]): string {
  const strNums: string[] = nums.map((num) => num.toString());

  strNums.sort((a, b) => (b + a).localeCompare(a + b));

  if (strNums[0] === "0") {
    return "0";
  }

  return strNums.join("");
}
