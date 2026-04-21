class UnionFind {
  private parent: number[];

  constructor(n: number) {
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) this.parent[i] = i;
  }

  find(a: number): number {
    if (this.parent[a] === a) return a;
    return (this.parent[a] = this.find(this.parent[a]));
  }

  unite(a: number, b: number): void {
    const pa = this.find(a);
    const pb = this.find(b);
    this.parent[pb] = pa;
  }
}

function minimumHammingDistance(
  S: number[],
  T: number[],
  A: number[][],
): number {
  const n = S.length;
  const uf = new UnionFind(n);
  const m = A.length;

  for (let i = 0; i < m; i++) uf.unite(A[i][0], A[i][1]);

  const CFM1 = new Map<number, Map<number, number>>(),
    CFM2 = new Map<number, Map<number, number>>();

  for (let i = 0; i < n; i++) {
    const parent = uf.find(i);

    if (!CFM1.has(parent)) {
      CFM1.set(parent, new Map());
      CFM2.set(parent, new Map());
    }

    if (!CFM1.get(parent).has(S[i])) CFM1.get(parent).set(S[i], 0);
    if (!CFM2.get(parent).has(T[i])) CFM2.get(parent).set(T[i], 0);

    CFM1.get(parent).set(S[i], CFM1.get(parent).get(S[i]) + 1);
    CFM2.get(parent).set(T[i], CFM2.get(parent).get(T[i]) + 1);
  }

  let res = 0;
  for (const [parent, map] of CFM1) {
    for (const [key, val] of map) {
      let sourceF = val,
        targetF = CFM2.get(parent).get(key) || 0;
      if (targetF >= sourceF) continue;

      res += sourceF - targetF;
    }
  }

  return res;
}
