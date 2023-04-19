const sumTo = (num) => {
  if (num === 1) return 1
  return num + sumTo(num - 1)
}

// const factorial = (num) => {
//   if(num != 1) {
//     return num * factorial(num -1)
//   } else {
//     return 1
//   }
// }

console.log(factorial(5))
