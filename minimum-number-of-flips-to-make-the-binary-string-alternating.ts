function minFlips(s: string): number {
  const n = s.length;
  const sDouble = s + s;
  const alt1 = new Array(2 * n)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? "0" : "1"))
    .join("");
  const alt2 = new Array(2 * n)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? "1" : "0"))
    .join("");

  let flipsAlt1 = 0,
    flipsAlt2 = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < 2 * n; i++) {
    if (sDouble[i] !== alt1[i]) flipsAlt1++;
    if (sDouble[i] !== alt2[i]) flipsAlt2++;

    if (i >= n) {
      if (sDouble[i - n] !== alt1[i - n]) flipsAlt1--;
      if (sDouble[i - n] !== alt2[i - n]) flipsAlt2--;
    }

    if (i >= n - 1) {
      result = Math.min(result, flipsAlt1, flipsAlt2);
    }
  }

  return result;
}
