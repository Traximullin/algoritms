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
  
console.log(x)
  
test();
  