{
  function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const r = [words[0]];

    for (let i = 1; i < words.length; i++)
      if (groups[i] !== groups[i - 1])
        r.push(words[i]);

    return r;
  }

  console.log(getLongestSubsequence(["e", "a", "b"], [0, 0, 1]));
  console.log(getLongestSubsequence(["а", "b", "c", "d"], [1,0,1,1]))
}
