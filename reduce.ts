{
    type Reducer = (accum: number, curr: number) => number

    const reduce = function(nums: number[], fn:Reducer, init: number = 0) {
        let result = init

        for(let num of nums) {
            result = fn(result,num) 
        }

        return result 
    };

    function sum(accum, curr) { return accum + curr * curr; }

    console.log(reduce([1,2,3,4],sum))
}