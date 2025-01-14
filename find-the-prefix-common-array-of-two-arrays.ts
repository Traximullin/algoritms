{
    function findThePrefixCommonArray(A: number[], B: number[]): number[] {
        const res = Array(A.length).fill(0);
        const set = new Set();
      
        let c = 0;
      
        for (let i = 0; i < A.length; i++) {
          if (A[i] === B[i]) c++;
          if (set.has(A[i])) c++;
          if (set.has(B[i])) c++;
      
          set.add(A[i]);
          set.add(B[i]);
      
          res[i] = c;;
        }
      
        return res;
    }

    console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4]))
}