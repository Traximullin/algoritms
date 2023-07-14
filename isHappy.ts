{
    const squares = {
        '0':0, '1':1, '2':4, '3':9, '4':16, 
        '5':25, '6':36, '7':49, '8':64, '9':81
    };

    const isHappy = function(n) {
        const memo = new Map()

        while(!memo.get(n)) {
            n = n.toString().split("").reduce((acc,i) => {
                acc += squares[i]
                return acc
            },0)
            if(!memo.has(n)) memo.set(n, false)
            else return false

            if(n === 1) return true
        }
    };

    console.log(isHappy(7))
}