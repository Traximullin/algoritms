{
    var arrayRankTransform = function(arr: number[]) {
        const sortedArray = Array.from(new Set(arr)).sort((a,b) => a - b)
        // const sortedArray = Int32Array.from(new Set(arr)).reverse()

        const map = new Map() 

        for(let i = 0; i < sortedArray.length; i++) {
            map.set(sortedArray[i], i + 1)
        }

        for(let i = 0; i < arr.length; i++) {
            arr[i] = map.get(arr[i])
        }

        return arr
    };

    console.log(arrayRankTransform([40,10,20,30]))
}