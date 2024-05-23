{
    function countGoodSubstrings(s: string): number {
        let c = 0;

        for (let i = 0; i<= (s.length -2); i++){

            const set = new Set([...s.slice(i, i + 3)])
    
            if(set.size === 3){
                c += 1;
            }

        }
    
        return c;
    };

    console.log(countGoodSubstrings("xyzzaz"))
}