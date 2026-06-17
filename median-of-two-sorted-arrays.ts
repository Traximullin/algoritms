function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged = nums1.concat(nums2);
  merged.sort((a, b) => a - b);

  const n = merged.length;

  return n % 2 === 0
    ? (merged[n / 2 - 1] + merged[n / 2]) / 2
    : merged[Math.floor(n / 2)];
}
