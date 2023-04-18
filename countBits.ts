// const stack = () => {
//     const res: number[] = []

//     return function binarySystem(number: number): number {
//         if(number === 1 || number === 0) {
//             res.push(number)
//             console.log(res)
//             return res.reduce((cur,prev) => cur + prev ,0)
//         } else {
//             res.push(number % 2)
//             binarySystem(Math.floor(number / 2))

//             return res.reduce((cur,prev) => cur + prev ,0)
//         }
//     }
// }
