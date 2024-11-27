function numRookCaptures(board: string[][]): number {
    const coords = [0, 0];
    let c = 0;

    main: for (let x = 0; x < board.length; x++) {
        const side = board[x];

        for (let y = 0; y < side.length; y++) {
            const sell = side[y];

            if (sell === "R") {
                coords[0] = x;
                coords[1] = y;
                break main;
            }
        }
    }

    const [ x, y ] = coords;

    // вверх
    for (let i = x - 1; i >= 0; i--) {
        const cell = board[i][y];

        if (cell === 'B') {
            break;
        }
        if (cell === 'p') {
            c += 1;
            break;
        }
    }

    for (let i = x + 1; i < 8; i++) {
        const cell = board[i][y];

        if (cell === 'B') {
            break;
        }
        if (cell === 'p') {
            c += 1;
            break;
        }
    }


    for (let i = y - 1; i >= 0; i--) {
        const cell = board[x][i];

        if (cell === 'B') {
            break;
        }
        if (cell === 'p') {
            c += 1;
            break;
        }
    }

    for (let i = y + 1; i < 8; i++) {
        const cell = board[x][i];

        if (cell === 'B') {
            break;
        }
        if (cell === 'p') {
            c += 1;
            break;
        }
    }

    return c;
};

console.log(numRookCaptures(
    [
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".","R",".",".",".","p"],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".","p",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."]
    ]
))