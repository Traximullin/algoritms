{
    // !TODO 
    // Написать свой класс-кеш
    function memoize(fn) {
        const hashMap = new Map();
        let calls = 0;

        return function(...args) {
            const argsKey = args.join('-')
            console.log(args)
            if(hashMap.has(argsKey)) {
                return hashMap.get(argsKey)
            }

            const result = fn(...args);

            hashMap.set(argsKey, result);
            calls += 1;
            console.log(calls)
            return hashMap.get(argsKey)
        }
    }
    
    const test = memoize(function (a, b) { return ({...a, ...b}); }
    )

    console.log(test({}))
    console.log(test({}))
    console.log(test({}))
}