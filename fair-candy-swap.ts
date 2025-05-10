{
 
    function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
        const sumA = aliceSizes.reduce((acc, x) => acc + x, 0);
        const sumB = bobSizes.reduce((acc, x) => acc + x, 0);
        const delta = (sumA - sumB) / 2;
        
        const setB = new Set(bobSizes);
        
        for (let x of aliceSizes) {
            
            const y = x - delta;
            if (setB.has(y)) {
                return [x, y];
            }
        }

        return [0, 0];
    };

    console.log(fairCandySwap([1,1], [2,2]))
}