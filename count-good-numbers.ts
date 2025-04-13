{
    const MOD = 1e9 + 7;
    const BIG_MOD = BigInt(MOD);

    function pow(x: bigint, n: number): number {
        let p = 1n;

        while (n > 0) {
            if (n & 1) p = (p * x) % BIG_MOD;
            x = (x * x) % BIG_MOD;
            n = Math.floor(n * 0.5);
        }
        
        return Number(p);
    }

    function countGoodNumbers(n: number): number {
        return (pow(20n, Math.floor(n * 0.5)) * (n & 1 ? 5 : 1)) % MOD;
    }
}