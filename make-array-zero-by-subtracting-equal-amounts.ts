{
    function minimumOperations(nums: number[]) {
        const uniq = new Set(nums);
    
        uniq.delete(0);
    
        return uniq.size
    }
    
    console.log(1)
}