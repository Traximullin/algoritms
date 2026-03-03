const findKthBit = (n: number, k: number): string => {
  if (n === 1) return "0";

  const mid = 1 << (n - 1);

  if (k === mid) return "1";

  if (k < mid) return findKthBit(n - 1, k);

  const mirroredPosition = 2 * mid - k;
  return findKthBit(n - 1, mirroredPosition) === "0" ? "1" : "0";
};
