{
    function isValidSudoku(board: string[][]): boolean {
        console.log('!')
        for (let i = 0; i < 1; i++) {
            console.log(board[i])
            const set_x = new Set();
            const set_y = new Set();

            board[i].forEach(item => {
                if (set_x.has(item))
                    return false;

                if (item !== ".")
                    set_x.add(item)

            })

            for (let j = 0; j < 9; j++) {
                const item = board[j][i];

                if (set_y.has(item))
                    return false;

                if (item !== ".")
                    set_y.add(item)
            }

        }

    };


    console.log(isValidSudoku([
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ]));
}