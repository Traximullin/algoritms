{
    function letterCombinations(digits: string): string[] {
        const map = new Map()
        map.set(2,['a','b','c'])
        map.set(3,['d','e','f'])
        map.set(4,['g','h','i'])
        map.set(5,['j','k','l'])
        map.set(6,['m','n','o'])
        map.set(7,['p','q','r','s'])
        map.set(8,['t','u','v'])
        map.set(9,['w','x','y','z'])
        let res =[]
        let numbs = digits.split('').map((n)=>map.get(+n))

        while(numbs.length > 1){
            const [first,sec,...other] = numbs

            for(let i = 0;i<first.length;i++){
                for(let j = 0;j<sec.length;j++){
                    res.push(first[i]+sec[j])
                }
            }
            numbs = [res]
            if(other.length > 0){
                numbs.push(...other)
            }
            res = []

        }

        
        return numbs[0]??[]
    };

    console.log(letterCombinations('23'))

}