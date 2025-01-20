'use strict';
let x = 2;

function test() {
    function bar() {
      console.log(x)
    }
    let x = 3;
    eval('let x = 4')

    bar();
}
  
// console.log(x)
  
test();

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}

console.log(i)

// function counter() {
//   let c = 0;

//   function create() {
//     c += 1;
//     return c;
//   }

//   return create
// }

// const test_c = counter();
// console.log(test_c())
// console.log(test_c())
// console.log(test_c())
// console.log(test_c())
// console.log(test_c())