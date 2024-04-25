{
    function findTheArrayConcVal(nums: number[]): number {
        let c = 0;

        while(nums.length) {
            if(nums.length !== 1) {
                c += parseInt(`${nums.shift()}${nums.pop()}`);
            } else {
                c += nums.shift() || 0;
            }
        }

        return c;
    };

    console.log(findTheArrayConcVal([7,52,2,4]))
    console.log(findTheArrayConcVal([5,14,13,8,12]))
}