{
    const largestOddNumber = function(num) {
        const n = num.length;

        for(let i = n-1; i >= 0; i--){
            const digit = +num[i];

            if(digit % 2 !== 0)
                return num.slice(0,i+1);
        }

        return "";
    };
    console.log(largestOddNumber("52"))
}