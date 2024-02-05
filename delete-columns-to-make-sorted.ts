{
    function minDeletionSize(strs: string[]): number {
        let count: number = 0;
      
        for (let col = 0; col < strs[0].length; col++) {
      
            for (let row = 1; row < strs.length; row++) {
      
                if (strs[row - 1][col].localeCompare(strs[row][col]) === 1) {
                    count++;

                    break;
                }
            }
        }
      
        return count;
    };
}