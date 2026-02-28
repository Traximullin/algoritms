function concatenatedBinary(n: number): number {
  const MODULO = BigInt(10 ** 9 + 7);
  let binaryStr = "";

  for (let i = 1; i <= n; i++) {
    const binary = i.toString(2);
    binaryStr += binary;
  }

  const binaryResult = BigInt("0b" + binaryStr);

  return Number(binaryResult % MODULO);
}
