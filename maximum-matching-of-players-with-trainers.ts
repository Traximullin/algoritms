{
    function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
        players.sort((a,b) => a - b);
        trainers.sort((a,b) => a - b);
        
        let c = 0;
        let p_i = 0;

        for(const t of trainers){
            if(players[p_i] <= t){
                p_i++
                c++;
            }
        }

        return c;
    };
}