{
    function maxCount(banned: number[], n: number, maxSum: number): number {
        const set = new Set(banned);
      
        let sum = 0, 
            c = 0;
      
        for (let i = 1; i <= n; i++) {
          const current = sum + i;
      
          if (!set.has(i) && current <= maxSum) {
            c++;
            sum = current;
          }

        }
      
        return c;
    }

    console.log(maxCount([11], 7, 50))
}