{
    function minBitFlips(start: number, goal: number): number {
        if (start === goal) {
            return 0;
        }
        
        let start_bit = start.toString(2);
        let goal_bit = goal.toString(2);
        
        const max_len = Math.max(start_bit.length, goal_bit.length);
        
        start_bit = start_bit.padStart(max_len, '0');
        goal_bit = goal_bit.padStart(max_len, '0');
        
        let c = 0;
        
        for (let i = 0; i < start_bit.length; i++) {
            if (start_bit[i] !== goal_bit[i]) {
                c++;
            }
        }

        return c;
    }
}