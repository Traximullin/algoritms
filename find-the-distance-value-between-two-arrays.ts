{
    function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
        let c = 0;
    
        for (const num1 of arr1) {
            for (const num2 of arr2) {
                if (Math.abs(num1 - num2) <= d) {
                    c--
                    break
                }
            }
            c++
        }
        
        return c;
    };
    
}