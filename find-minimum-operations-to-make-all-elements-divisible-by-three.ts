{
    function minimumOperations(nums: number[]): number {
        let c = 0;

        for (const num of nums) 
            if (num % 3 !== 0)
                c++

        return c;
    };

    console.log(minimumOperations([1,2,3,4]))   
}