{
    Array.prototype.snail = function(rowsCount, colsCount) {
        const result = []

        if(rowsCount * colsCount !== this.length) {
            return result
        }

        for(let i = 0; i < colsCount; i++) {
            if(i % 2) {
                this.push(this.splice(0,rowsCount).reverse())
                continue
            }
            this.push(this.splice(0,rowsCount))
        }

        for(let i = 0; i < rowsCount; i++) {

            result.push([])
            
            for(let j = 0; j < colsCount; j++){
                result[i].push(this[j][i])
            }

        }

        return result
    }

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


    console.log(arr.snail(6,3))
}