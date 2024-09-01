{
    function construct2DArray(original: number[], m: number, n: number): number[][] {
        if (m * n !== original.length)
            return [];

        const r = [];

        for (let i = 0; i < m; i++) {
            const slice = original.slice(i * n, (i + 1) * n);

            r.push(slice);
        }

        return r;
    };

    console.log(construct2DArray([1,2,3,4],2,2))
}