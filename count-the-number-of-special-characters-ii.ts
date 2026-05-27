function numberOfSpecialChars(word: string): number {
  const m = new Map();
  const m2 = new Map();
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 97) {
      m.set(word[i], i);
    } else if (word[i].charCodeAt(0) < 97) {
      const c = word[i].toLowerCase();

      if (!m2.has(c)) {
        m2.set(c, i);
      }
    }
  }

  for (const [k, v] of m) {
    if (m2.has(k)) {
      if (v < m2.get(k)) {
        result++;
      }
    }
  }

  return result;
}
