{
    const transpose = function(matrix) {
        var result = []

        for (let i = 0; i < matrix[0].length; i++) {
            result[i] = []
    
            for (let j = 0; j < matrix.length; j++) {
                result[i].push(matrix[j][i])
            }
            
        }

        return result
    };

    console.log(transpose([[1,4,7],[2,5,8],[3 ,6,9]]))

}