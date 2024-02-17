{
    const helper = (array, size) => {
        const result = [];

        for(let i = 0; i < Math.ceil(array.length / size); i++) {
            result[i] = array.slice((i * size), (i * size) + size)
        }

        return result
    }

    const groupThePeople = function(groupSizes) {
        const result = [];

        const hash = {}

        for(let i = 0; i < groupSizes.length; i++) {
            if(hash[groupSizes[i]]) {
                hash[groupSizes[i]].push(i)
            } else {
                hash[groupSizes[i]] = [i]
            }
        }

        for(const [length, value] of Object.entries(hash)) {
            result.push(...helper(value, +length))
        }

        return result
    };


    console.log(groupThePeople([3,3,3,3,3,1,3]))
}