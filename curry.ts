{
    const curry = function(fn) {
        return function curried(...args) {
            if(args.length >= fn.length) {
                return fn.apply(this,args)
            } else {
                return function(...argsTwo) {
                    return curried.apply(this, args.concat(argsTwo))
                }
            }
        }
    };

    function sum(a,b,c) {
        console.log(a)
        return a + b + c
    }

    const curriedSum = curry(sum)
    console.log(curriedSum(1)(2)(3))
}