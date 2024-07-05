{
    function furthestDistanceFromOrigin(moves: string): number {
        const chars = {
            L: 0,
            R: 0,
        };

        const cost = {
            L: -1,
            R: 1,
        }

        for (const move of moves) {
            if (move in chars) 
                chars[move] += 1
        }

        chars.L > chars.R ? cost['_'] = cost.L : cost['_'] = cost.R

        let c = 0;

        for (const move of moves) {
            c += cost[move]

        }

        return Math.abs(c);
    };

    console.log(furthestDistanceFromOrigin('L_RL__R'))
}