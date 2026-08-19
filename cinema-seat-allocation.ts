const firstVariant = [2, 3, 4, 5];
const secondVariant = [4, 5, 6, 7];
const thirdVariant = [6, 7, 8, 9];

function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    const map: Map<number, Set<number>> = new Map();
    for (const { 0: row, 1: col } of reservedSeats) {
        if (!map.has(row)) {
            map.set(row, new Set());
        }

        if (firstVariant.includes(col)) {
            map.get(row).add(0);
        }

        if (secondVariant.includes(col)) {
            map.get(row).add(1);
        }

        if (thirdVariant.includes(col)) {
            map.get(row).add(2);
        }
    }

    let families = 2 * n;
    for (const reservedVariants of map.values()) {
        if (reservedVariants.size === 3) {
            families -= 2;
        } else if (reservedVariants.size) {
            families -= 1;
        }
    }

    return families;
};
