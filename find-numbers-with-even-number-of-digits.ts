{
    function findNumbers(nums: number[]): number {
        let c = 0;

        for(let num of nums) {

            if(String(num).length % 2 == 0) {
                c++
            }
            
        }

        return c;
    };

    console.log(findNumbers([555,901,482,1771]))
}