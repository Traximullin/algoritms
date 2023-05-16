{
    // Please solve it without the built-in Array.map method.
    
    const map = function(arr, fn) {
        const result = []

        for(let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i],i))
        }

        return result 
    };
    
    function plusone(n) { 
        return n + 1;
    }

    function plusI(n, i, a) { return n + i + a; }
    console.log(map([1,2,3], plusone))
}