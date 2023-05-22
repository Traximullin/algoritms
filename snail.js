{
    Array.prototype.snail = function(rowsCount, colsCount) {
        const result = []

        for(let i = 0; result.length !== rowsCount; i+= rowsCount) {
            result.push(this.splice(0,colsCount))
        }

        return result
    }

    const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
    console.log(arr.snail(5,4))
}