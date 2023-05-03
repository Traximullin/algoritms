{
    const data = {
        "H": 1.36,
        "W": 1.00,
        "A": 0.87,
        "O": 0.80
    }
    function separateLiquids(glass) {
        if(glass.length <= 0) {
            return glass
        }

        const size = glass[0].length

        glass = glass.flat().sort((a,b) => data[a] - data[b])

        const result = []

        for(let i = 0; i < Math.ceil(glass.length / size); i++) {
            result[i] = glass.slice((i*size), (i*size) + size)
        }

        return glass
    }

    console.log(separateLiquids([['A','H','W','O']]))
    console.log(separateLiquids([['A'],['H'],['W'],['O']]))
}