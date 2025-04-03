{
    function rotate(matrix: number[][]): void {
        const result = [];

        for (let i = matrix.length - 1; i >= 0; i--) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (!result[j]) {
                    result[j] = [matrix[i][j]]
                } else {
                    result[j].push(matrix[i][j])
                }

            }
        }

        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = result[i];
        }

    };
    const test = [[1,2,3],[4,5,6],[7,8,9]]
    console.log(rotate(test))

    console.log(test)
}
