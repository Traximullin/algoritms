{
    const debounce = function(fn, t) {
        let timer;

        return function(...args) {
            if(timer) {
                clearTimeout(timer)
            }

            timer = setTimeout(() => {
                fn(...args)
            }, t)
        }
    };
    
    const log = debounce(console.log, 3000);

    log('1');
    log('2');
    log('3');
    log('4');
    log('5');
    log('6');
}