{
    function cachingDecorator(func) {
        let cache = new Map()

        return function(x) {
            if(cache.has(x)) {
                return cache.get(x)
            }

            let result = func(x)

            cache.set(x, result)
            return result
        }
    }

    function fibonacci(n) {
        if (n < 2)
          return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    fibonacci = cachingDecorator(fibonacci)

    console.log(fibonacci(1))
    console.log(fibonacci(1))
    console.log(fibonacci(5))
    console.log(fibonacci(20))
    console.log(fibonacci(50))

}