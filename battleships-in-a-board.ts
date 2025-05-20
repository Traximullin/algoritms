{
    function countBattleships(board: string[][]): number {
        let c = 0;
        
        for (let i = 0; i < board.length; i++) {

            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== "X")
                    continue;

                    
                if (board[i + 1] && board[i + 1][j] === "X") 
                    continue;

                if (board[i][j + 1] === "X")
                    continue;
                
                c += 1;
            }
        }

        return c;
    };

    console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]))
}