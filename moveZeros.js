const moveZeros = (arr) => {
    let count = 0
    const result = arr.filter(elem =>  {
        if(elem !== 0) {
            return elem
        } else {
            count++
        }
    })

    return result.concat(new Array(count).fill(0))
}
