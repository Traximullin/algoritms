{
    const sumOddLengthSubarrays = function(arr) {
        let sum = 0;

        if (!arr.length) {
            return sum
        }

        const findSum = (start: number, end: number) => {
            let sum = 0;

            for(let i = start; i <= end; i++) {
                sum += arr[i]
            }

            return sum
        }

        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; (j + i) < arr.length; j += 2) {
                sum += findSum(i, i + j)
            }
        }

        return sum
    };

    console.log(sumOddLengthSubarrays([1,4,2,5,3]))
}