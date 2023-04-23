const add = (n) => {
    let result = n
    console.log(result)
    return function sum(b) {
        console.log(b)
        if(b) {
            result += b
            return (c) => {
                if(c) {
                    return sum(c)
                }
                return result
            }
        }
        return result
    }
}
const test = add(1)(2)(3)(4)(5)(6)(7)
console.log(test)
