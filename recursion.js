// const sumTo = (num) => {
//   if (num === 1) return 1
//   return num + sumTo(num - 1)
// }

// const factorial = (num) => {
//   if(num != 1) {
//     return num * factorial(num -1)
//   } else {
//     return 1
//   }
// }

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


// const printListCycle  = (obj) => {
//   console.log(obj.value)
//   if(obj.next) {
//     printListCycle(obj.next)
// const factorial = (num) => {
//   if(num != 1) {
//     return num * factorial(num -1)
//   } else {
//     return 1
//   }
// }

// const printListCycle  = (obj) => {
//   const reversed = []
//   let showList = obj

//   while(showList) {
//     reversed.push(showList.value)
//     showList = showList.next
//   }
//   return reversed.reverse()
// }


// const printListCycle  = (obj) => {
//   let showList = obj
//   while(showList) {
//     console.log(showList.value)
//     showList = showList.next
//   }
// }

const fibonachi = (n) => {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
