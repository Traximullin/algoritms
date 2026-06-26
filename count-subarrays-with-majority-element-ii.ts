function countMajoritySubarrays(nums: number[], target: number): number {
  const n = nums.length;
  const pref = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++)
    pref[i + 1] = pref[i] + (nums[i] === target ? 1 : -1);

  const vals = Array.from(new Set(pref)).sort((a, b) => a - b);
  const index = new Map(vals.map((v, i) => [v, i + 1]));
  const fenwick = new Array(vals.length + 2).fill(0);

  const add = (i: number) => {
    for (; i < fenwick.length; i += i & -i) fenwick[i]++;
  };
  const sum = (i: number): number => {
    let s = 0;
    for (; i > 0; i -= i & -i) s += fenwick[i];
    return s;
  };

  let ans = 0;
  for (let i = 0; i <= n; i++) {
    const idx = index.get(pref[i])!;
    ans += sum(idx - 1);
    add(idx);
  }
  return ans;
}
