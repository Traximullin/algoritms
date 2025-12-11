function countCoveredBuildings(n: number, buildings: number[][]): number {
    buildings.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

    const sortedByYAxis = Array.from({ length: n }, () => []);
    for (const { 0: x, 1: y } of buildings) {
        sortedByYAxis[y - 1].push(x);
    }

    let count = 0;
    for (let i = 1; i < buildings.length - 1; i++) {
        const { 0: x, 1: y } = buildings[i];
        
        if (buildings[i - 1][0] === buildings[i + 1][0]) {
            const allOnYAxis = sortedByYAxis[y - 1];
            if (allOnYAxis[0] !== x && allOnYAxis.at(-1) !== x) {
                count++;
            }
        }
    }

    return count;
};