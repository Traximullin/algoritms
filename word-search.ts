{
    function exist(board: string[][], word: string, link = 0): boolean {
        console.log('board', board)
        function helper(i = 0, j = 0, link = 0) {
        }
        for (let i = 0; i < board.length; i++) {
            console.log(board[i])
            for (let j = 0; j < board[i][j].length; j++) {

                if (board[i][j] === word[link]) {
                    console.log('1')
                    console.log(i, j)
                    if (board[i][j + 1] === word[link + 1]) {
                        console.log(i, j)
                    }
                }

            }
        }
    };

    console.log(exist(
        [
            ["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]
        ], "ABCCED"
    ))
}