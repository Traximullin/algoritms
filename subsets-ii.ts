{
    function subsetsWithDup(nums: number[]): number[][] {
        const result = [[]];
        nums.sort()
 
        for (const n of nums){
            const currentSize = result.length
            for (let i = 0; i < currentSize; i++){
                result.push([...result[i], n])
            }
        }
 
        const withoutDupl = new Set(result.map(s => JSON.stringify(s)))
 
        return Array.from(withoutDupl).map(s => JSON.parse(s))
    };
}