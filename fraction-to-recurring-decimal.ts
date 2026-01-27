function fractionToDecimal(numerator: number, denominator: number): string {
  const num = Math.abs(numerator),
    denom = Math.abs(denominator);
  let result = "";
  const map = new Map<number, number>();

  if (numerator === 0) return "0";
  if ((numerator < 0 && denominator > 0) || (numerator > 0 && denominator < 0))
    result += "-";

  result += Math.floor(num / denom).toString();
  let remainder = num % denom;

  if (remainder === 0) return result;

  result += ".";
  map.set(remainder, result.length);

  while (remainder !== 0) {
    remainder *= 10;
    result += Math.floor(remainder / denom).toString();
    remainder %= denom;

    if (map.has(remainder)) {
      const index = map.get(remainder)!;
      result = result.slice(0, index) + "(" + result.slice(index) + ")";
      break;
    }

    map.set(remainder, result.length);
  }

  return result;
}
