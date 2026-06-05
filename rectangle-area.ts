function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number,
): number {
  let length1 = ax2 - ax1;
  let length2 = bx2 - bx1;

  let height1 = ay2 - ay1;
  let height2 = by2 - by1;

  let length3 = calc(ax1, ax2, bx1, bx2);
  let height3 = calc(ay1, ay2, by1, by2);

  return length1 * height1 + length2 * height2 - length3 * height3;
}

function calc(a1, a2, b1, b2) {
  if (a1 <= b1 && a2 <= b2 && b1 <= a2) {
    return a2 - b1;
  }

  if (a1 >= b1 && a2 >= b2 && b2 >= a1) {
    return b2 - a1;
  }

  if (a1 < b1 && b2 < a2) {
    return b2 - b1;
  }

  if (b1 < a1 && a2 < b2) {
    return a2 - a1;
  }

  return 0;
}
