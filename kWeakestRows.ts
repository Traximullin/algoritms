{
    const kWeakestRows = function(mat, k) {
        return mat
            .map((row, i) => [row.reduce((a, b) => a + b, 0), i])
            .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
            .slice(0, k).map(([_, i]) => i);
    };
}