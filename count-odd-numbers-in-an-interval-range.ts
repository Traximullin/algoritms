function countOdds(low: number, high: number): number {
    if ((high + low) % 2 === 1) return Math.floor((high - low) / 2 + 1);
    if (high % 2 === 1) return (high - low) / 2 + 1;
    return (high - low) / 2;
}