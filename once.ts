{
    const once = (fn) => {
        let isClosed = false

        return (...arg) => {
            if(!isClosed) {
                isClosed = true
                return fn(...arg)
            }
        }
    }

    const fn = (a,b,c) => (a + b + c)

    const onceFc = once(fn)

    console.log(onceFc(5,7,4))
    console.log(onceFc(5,7,4))
    console.log(onceFc(5,7,4))
}