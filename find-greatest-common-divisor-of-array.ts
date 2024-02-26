{
    function findGCD(nums: number[]): number {
        const max = Math.max(...nums)
        const min = Math.min(...nums)
        
        for(let i = min; i > 0; i--) {
            if(max % i === 0 && min % i === 0) {
                return i
            }
        }
    };

    console.log(findGCD([2,5,6,9,10]))
}