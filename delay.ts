
// const delay = (f,ms) => {

//   return function() {
//     setTimeout(() => {
//       f.apply(this,arguments)
//     },ms)
//   } 
// }

// const test = delay(console.log, 1000)

// const delay = (callback,ms) => new Promise(() => {
//   setTimeout(callback,ms)
// })

const delay = (callback,ms) => queueMicrotask(() => {
    setTimeout(callback,ms)
})

delay(() => console.log("1"),3000)