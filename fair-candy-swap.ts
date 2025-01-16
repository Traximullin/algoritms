{
 
    function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
        const alise = aliceSizes.reduce((prev, next) => prev += next, 0);
        const bob = bobSizes.reduce((prev, next) => prev += next, 0);
        
    };

    console.log(fairCandySwap([1,1], [2,2]))
}