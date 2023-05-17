{
    const chunk = function(arr, size) {
        const result: number[] = []

        for(let i = 0; i < Math.ceil(arr.length / size); i++) {
            result.push(arr.slice(i * size, size * (i + 1)))
        }

        return result
    };
}
