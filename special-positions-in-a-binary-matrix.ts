{
    const numSpecial = function(mat) {
        let sum = 0;

        for(let i = 0; i < mat.length; i++) {
            
            for(let j = 0; j < mat[0].length; j++) {
                const col = mat.map(x => x[j]).filter(x => x == 1)

                const row = mat[i].filter(x => x == 1)

                if (mat[i][j] == 1 && row.length == 1 && col.length == 1) 
                    sum += 1
            }

        }

        return sum
    };
}