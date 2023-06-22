{
    var cancellable = function(fn, args, t) {
        const timer = setTimeout(() => {
            fn(...args)
        },t)
        
        return () => {
            clearTimeout(timer)
        }
    }

    const fn = (x) => x * 5
    const args = [2], t = 20, cancelT = 50

    const cancel = cancellable(fn, args, t);

}