{
    function findDiagonalOrder(mat: number[][]): number[] {
        let leftIncrease = false
        const res = []
        const m = mat.length
        const n = mat[0].length

        for(let sum=0; sum<= m+n-2; sum+=1) {
            if (leftIncrease) {
                for(let left = Math.max(0, sum-n+1); left<= Math.min(m-1, sum); left+=1) {
                    res.push(mat[left][sum-left])
                }
            } else {
                for(let left = Math.min(m-1, sum); left>=Math.max(sum-n+1, 0); left-=1) {
                    res.push(mat[left][sum-left])
                }
            }

            leftIncrease = !leftIncrease
        }

        return res
    };
}