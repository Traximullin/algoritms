{
    const twoSum = function(numbers, target) {
        let left = 0, rigth = numbers.length - 1

        while(left < rigth) {
            const sum = numbers[left] + numbers[rigth]
            
            if(sum === target) {
                return [left + 1, rigth + 1]
            }

            if(sum > target) {
                rigth--
            } else {
                left++
            }
        }

        return [-1,-1]
        // for(let i = 0; i < numbers.length; i++) {
        //     for(let j = i + 1; j < numbers.length; j++) {
        //         if(numbers[i] + numbers[j] === target) {
        //             return [i + 1, j + 1]
        //         }
        //     }
        // }

    };

    console.log(twoSum([2,7,11,15],9))
}