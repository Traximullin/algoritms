{
    const cancellableTimer = function(fn, args, t) {
        fn(...args)

        let id = setTimeout(function run() {
            fn(...args)
            id = setTimeout(run, t)
        }, t)

        return () => {
            clearTimeout(id)
        }
    };


}