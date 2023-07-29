{
    // @ts-ignore
    Function.prototype.callPolyfill = function(context, ...args) {
        // Object.defineProperty(context, 'fn', {
        //     value: this,
        //     enumerable: false
        // })

        // return context.fn(...args)

        return this.bind(context)(...args)
    }

    function add(b) {
        return this.a + b; 
    }
    
    console.log(add.callPolyfill([{"a": 5}, 7]))
}