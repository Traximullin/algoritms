function luckyNumbers(matrix: number[][]): number[] {
    const row = {};
    const col = {};

    for (let i = 0; i < matrix.length; i++)
        row[i] = Math.min(...matrix[i]);

    for (let j = 0; j < matrix[0].length; j++) 
        col[j] = Math.max(...matrix.map(row => row[j]));

    const lucky_numbers: number[] = [];

    for (let i = 0; i < matrix.length; i++) 
        for (let j = 0; j < matrix[i].length; j++) 
            if (matrix[i][j] === row[i] && matrix[i][j] === col[j]) 
                lucky_numbers.push(matrix[i][j]);

    return lucky_numbers;
};
[
    [3,7,8],
    [9,11,13],
    [15,16,17]
]
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))