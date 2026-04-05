function judgeCircle(moves: string): boolean {
  let U = 0,
    D = 0,
    L = 0,
    R = 0;

  for (let c of moves) {
    if (c === "U") U++;
    else if (c === "D") D++;
    else if (c === "L") L++;
    else if (c === "R") R++;
  }

  return U === D && L === R;
}
