{
    function findSmallestInteger(nums: number[], value: number): number {
        let fmap = new Array(value).fill(0);

        for (const n of nums) {
            fmap[(value + (n % value)) % value]++;
        }

        let i = 0;
        while (fmap[i % value] > 0) {
            fmap[i % value]--;
            i++;
        }

        return i;
    };
}