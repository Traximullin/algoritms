{
    function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
        const hash = new Map();

        items1.concat(items2).forEach(items => {
            const new_value = (hash.get(items[0]) || 0) + items[1];

            hash.set(items[0], new_value)
        })

        return [...hash.entries()].sort((a, b) => a[0] - b[0])
    };

    console.log(mergeSimilarItems([[1,1],[4,5],[3,8]], [[3,1],[1,5]]))
}