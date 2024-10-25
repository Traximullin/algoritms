{
    function minimalKSum(nums: number[], k: number): number {
        const set = Array.from(new Set(nums)).sort((a, b) => a - b);
        let sum = 0;
        let missing = 1;
    
        for (let i = 0; i < set.length && k > 0; i++) {
            while (missing < set[i] && k > 0) {
                sum += missing;
                missing++;
                k--;
            }
            missing = set[i] + 1;
        }
    
        while (k > 0) {
            sum += missing;
            missing++;
            k--;
        }
    
        return sum;
    }

    console.log(minimalKSum([5,6], 6))
    console.log(minimalKSum([1, 1], 2));
}