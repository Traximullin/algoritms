{
    function containsPattern(arr: number[], m: number, k: number): boolean {
        let c = 0;
        
        for (let i = 0, j = m; i < arr.length - m; i++, j++) {
            if (arr[i] === arr[j]) {
                c++;
            } else {
                c = 0;
            }
            
            if (c === m * (k - 1)) {
                return true;
            }
        }
        
        return false;
    }
}