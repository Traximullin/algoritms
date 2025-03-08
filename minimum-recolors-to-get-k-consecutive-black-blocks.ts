{
    function minimumRecolors(blocks: string, k: number): number {
        let l = 0
        let op = 0
        let res = Infinity

        for (let r = 0; r < blocks.length; r++) {
            blocks[r] === "W" && op++
            if (r - l + 1 > k) {
                if (blocks[l] === "W") op--
                l++
            }
            if(r - l + 1 === k ) res = Math.min(res, op)
        }
    
        return res
    };
}