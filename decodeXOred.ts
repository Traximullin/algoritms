{
    const decode = function(encoded, first) {
        const values: number[] = [first]

        for(let i = 0; i < encoded.length; i++) {
            first = encoded[i] ^ first
            values.push(first)
        }

        return values
    };

    console.log(decode([1,2,3], 1))
}