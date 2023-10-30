{
    var sortByBits = function (arr) {
        let result = []
        arr.sort((a, b) => a - b)
        
        for (let i = 0; i < arr.length; i++) {
            let binary = arr[i].toString(2).split('').filter(b => b == 1).length
            result.push([binary, arr[i]])
        }
        result.sort((a, b) => a[0] - b[0])
        return result.map(arr => arr[1])
    };
}