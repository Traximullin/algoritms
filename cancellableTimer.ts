{
    const cancellableTimer = function(fn, args, t) {
        fn(...args)

        let timeout = setTimeout(function run() {
            fn(...args)
            timeout = setTimeout(run, t)
        }, t)

        return () => {
            clearTimeout(timeout)
        }
    };


}