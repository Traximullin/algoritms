{
    function findNumbers(nums: number[]): number {
        let c = 0;

        for(let num of nums) {
            let num_length = 0;

            while(num > 0) {
                num =  num / 10
                num_length++
            }

            if(num_length % 2 == 0) {
                c++
            }

        }

        return c;
    };

    console.log(findNumbers([12,345,2,6,7896]))
}