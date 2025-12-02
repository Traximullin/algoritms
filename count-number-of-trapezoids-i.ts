const countTrapezoids = (points: number[][]): number => {
    const pointCountByYLevel = new Map<number, number>();
    
    for (const [x, y] of points) {
        pointCountByYLevel.set(y, (pointCountByYLevel.get(y) || 0) + 1);
    }

    let totalSegmentCount = 0n;
    let sumOfSquaredSegmentCounts = 0n;
    const MOD = BigInt(10 ** 9 + 7);
    
    for (const pointsAtLevel of pointCountByYLevel.values()) {
        if (pointsAtLevel < 2) continue;
        const segmentsAtLevel = BigInt((pointsAtLevel * (pointsAtLevel - 1)) / 2);
        totalSegmentCount += segmentsAtLevel;
        sumOfSquaredSegmentCounts += segmentsAtLevel * segmentsAtLevel;
    }
    
    const trapezoidCount = (totalSegmentCount * totalSegmentCount - sumOfSquaredSegmentCounts) / 2n;
    
    return Number(trapezoidCount % MOD);
};