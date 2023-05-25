{
    Array.prototype.groupBy = function(fn) {
        const result = {}

        this.forEach(elem => {
            const key = fn(elem)
            result.hasOwnProperty(key) ? result[key].push(elem) : result[key] = [elem]
        })

        return result
    }
    // * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
    new Array(1,2,3,4,5,6,7,8,9,10).groupBy(function (n) { return String(n > 5); })

}