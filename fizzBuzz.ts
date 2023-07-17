{
    var fizzBuzz = function(n) {
        const result: (string|number)[] = []

        for(let i = 1; i <= n; i++) {
            let res = ""

            if(i % 3 === 0) res += "Fizz"
            if(i % 5 === 0) res += "Buzz"
        
            if(res === "") res += i
            result.push(res)
        }

        return result
    };  

    console.log(fizzBuzz(15))
}