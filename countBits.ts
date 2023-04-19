const stack = () => {
    const res: number[] = []

    return function binarySystem(number: number): number {
        if(number === 1 || number === 0) {
            res.push(number)
            console.log(res)
            return res.reduce((cur,prev) => cur + prev ,0)
        } else {
            res.push(number % 2)
            binarySystem(Math.floor(number / 2))
        
            return res.reduce((cur,prev) => cur + prev ,0)
        }
    }
}


// const countBits = (number: number) => {
//     const res: number[] = []
//     do {
//         res.push(Math.floor(number % 2))
//         number = Math.floor(number / 2) 
//     } while(number > 0)
//     console.log(res)
//     return res.reduce((prev, count) => prev + count,0)
// }
const countBits = (number: number) => number.toString(2).split("0").join("").length


console.log(countBits(49))
console.log(countBits(4))

