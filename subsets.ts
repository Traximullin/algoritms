{

    function subsets(nums: number[]): number[][] {
        const r: number[][] = [[]];

        for (const num of nums) {
            const length = r.length;

            for (let i = 0; i < length; i++) {
                r.push([...r[i], num])   
            }

        }

        return r;
    };

    console.log(subsets([1,2,3]))
}