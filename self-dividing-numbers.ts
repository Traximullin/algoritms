{
    const selfDividingNumbers = function(left, right) {
        const result: number[] = [];

        while(left <= right) {
            const numbers = [...String(left)];

            if(!numbers.includes("0")) {
                const isSelfDividing = numbers.every((numberString) => left % Number(numberString) == 0)
            
                if(isSelfDividing) {
                    result.push(left)
                }
            }
            
            left++ 
        }

        return result
    };

    console.log(selfDividingNumbers(1, 22))
}