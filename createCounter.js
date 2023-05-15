{
    const createCounter = function(n) {
        let counter = n

        return function() {
            return counter++
        };
    };

    function* test(count) {
        while(true) {
            yield count++
        }
    } 

    const x = test(10)
    console.log(x.next())
    console.log(x.next())
    console.log(x.next())
    console.log(x.next())

    const counter = createCounter(10)
    console.log(counter())
    console.log(counter())
    console.log(counter())
}