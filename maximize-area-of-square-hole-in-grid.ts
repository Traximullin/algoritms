function maximizeSquareHoleArea(
  n: number,
  m: number,
  hBars: number[],
  vBars: number[],
): number {
  hBars.sort((a, b) => a - b);
  vBars.sort((a, b) => a - b);

  let maxHorizontalGap = 1;
  let curHorizontalGap = 1;
  for (let i = 0; i < hBars.length; i++) {
    const cur = hBars[i];
    const prev = hBars[i - 1] ?? cur - 1;
    if (prev + 1 === cur) {
      curHorizontalGap++;
    } else {
      curHorizontalGap = 2;
    }

    maxHorizontalGap = Math.max(maxHorizontalGap, curHorizontalGap);
  }

  let maxVerticalGap = 1;
  let curVerticalGap = 1;
  for (let i = 0; i < vBars.length; i++) {
    const cur = vBars[i];
    const prev = vBars[i - 1] ?? cur - 1;
    if (prev + 1 === cur) {
      curVerticalGap++;
    } else {
      curVerticalGap = 2;
    }

    maxVerticalGap = Math.max(maxVerticalGap, curVerticalGap);
  }

  return Math.min(maxHorizontalGap, maxVerticalGap) ** 2;
}
