{
    const filter = function(arr, fn) {
        const result: number[] = []

        for(let i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr) && result.push(arr[i])
        }

        return result
    }

    const arr = [1,2,3]
    function firstIndex(n, i) { return i === 0; }

}