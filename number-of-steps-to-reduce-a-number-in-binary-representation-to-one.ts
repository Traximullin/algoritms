function numSteps(s: string): number {
  let carry = false;
  let steps = 0;
  for (let i = s.length - 1; i >= 1; --i) {
    const bit = s[i] === "1";
    if (bit === carry) {
      steps += 1;
    } else {
      carry = true;
      steps += 2;
    }
  }
  if (carry) {
    steps += 1;
  }
  return steps;
}
