function getHappyString(n: number, k: number): string {
  let count = 0;
  let result = "";

  const backtrack = (path: string) => {
    if (path.length === n) {
      count++;

      if (count === k) {
        result = path;
      }
      return;
    }

    for (let ch of ["a", "b", "c"]) {
      if (path.length === 0 || path[path.length - 1] !== ch) {
        backtrack(path + ch);
      }
    }
  };

  backtrack("");
  return result;
}
