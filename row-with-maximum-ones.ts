{
    function rowAndMaximumOnes(mat: number[][]): number[] {
        const result = [0, 0];

        for(let i = 0; i < mat.length; i++) {
            const c = mat[i].reduce((prev, next) => prev + next, 0)

            if(c > result[1]) {
                result[0] = i
                result[1] = c
            }
        }

        return result
    };

    console.log(rowAndMaximumOnes([[0,1],[1,0]]))
}