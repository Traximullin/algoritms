{
    function findLucky(arr: number[]): number {
        let result = -1;
        const hash = new Map();

        for(let i = 0; i < arr.length; i++) {
            hash.set(arr[i], (hash.get(arr[i]) || 0) + 1)
        }

        hash.forEach((num, key) => {
            if (num === key)
                result = Math.max(result, key)
        })
        
        return result
    };

    console.log(findLucky([2,2,3,4]))
}