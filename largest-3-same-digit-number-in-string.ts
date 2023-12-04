{
    var largestGoodInteger = function(num) {
        let max = ""

        for(let i = 2; i < num.length; i++) {
            if(num[i] === num[i - 1] && num[i] === num[i - 2]) {
                const sub = num[i].repeat(3)
                if(sub > max) {
                    max = sub
                }
            }
        }

        return max
    };

    console.log(largestGoodInteger("99921234324444"))
}