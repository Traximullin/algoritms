{
    const distributeCandies = function(candyType) {
        const hashmap = {};
        let r = 0;
    
        for (let i = 0; i < candyType.length; i++) {
            if (!hashmap[candyType[i]]) 
                r++;
            
            hashmap[candyType[i]] = i + 1;

            if (r === ~~(candyType.length/2)) 
                return r;
        }
        
        return r;
    };
}