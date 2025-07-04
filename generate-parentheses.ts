{
    function generateParenthesis(n: number): string[] {
        const result: string[] = [];
        
        function backtrack(currentSet: string, openPar: number, closePar: number) {
            if (currentSet.length === n * 2) {
                result.push(currentSet);
                return;
            }
            
            if (openPar < n) 
                backtrack(currentSet + "(", openPar + 1, closePar);
            
            if (closePar < openPar) 
                backtrack(currentSet + ")", openPar, closePar + 1)
        }
        
        backtrack("", 0, 0);

        return result;    
    };
}