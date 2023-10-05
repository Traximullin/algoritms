{
    const uniqueOccurrences = function(arr) {
        const counter = new Map()

        arr.forEach(num => {
            if(counter.has(num)) {
                counter.set(num, counter.get(num) + 1)
            } else {
                counter.set(num, 1)
            }
        })

        const setNums = new Set(counter.values())

        return counter.size === setNums.size
    };

    console.log(uniqueOccurrences([1,2]))
}