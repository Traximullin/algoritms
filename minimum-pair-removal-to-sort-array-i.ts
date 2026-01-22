function minimumPairRemoval(arr: number[]): number {
  let count = 0;
  let sorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (!(arr[i + 1] >= arr[i])) {
      sorted = false;
      break;
    }
  }
  if (sorted) return count;
  let map = {};
  let sum = 0;
  let min = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    sum = arr[i] + arr[i + 1];
    if (!map[sum]) {
      map[sum] = [i, i + 1];
    }
    if (sum < min) min = sum;
  }

  arr.splice(map[min][0], 2, min);
  count++;

  return count + minimumPairRemoval(arr);
}
