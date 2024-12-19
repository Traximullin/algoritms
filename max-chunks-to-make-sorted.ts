{
    function maxChunksToSorted(arr: number[]): number {
        let c = 0;
        let max = 0;

        for (let i= 0; i < arr.length; i++) {
            if (arr[i] > max) 
                max = arr[i];

            if (max == i) c += 1;
        }

        return c;
    };

    console.log(maxChunksToSorted([4,3,2,1,0]))   
}