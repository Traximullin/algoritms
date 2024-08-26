{
    function thirdMax(nums: number[]): number {
        const sorted = Array.from(new Set(nums)).sort((a,b) => b - a);

        return sorted[2] ?? sorted[0];
    };

    console.log(thirdMax([3,3,4,3,4,3,0,3,3]))
    console.log(thirdMax([1,2]))
}