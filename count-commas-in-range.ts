function countCommas(n: number): number {
    if (n < 1000) {
        return 0;
    }

    const len: number = String(n).length;

    if (len % 3 === 0) {
        return (len / 3 - 1) + (n - 1000);
    }

    return Math.floor(len / 3) + n - 1000;
};
