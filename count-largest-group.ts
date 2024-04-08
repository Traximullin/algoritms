{
    const countLargestGroup = n => {
        const map = {};

        let max = 1;

        for(let i = 1; i <= n; i++){

            const sum = [...`${i}`].reduce((a,c) => a + Number(c), 0)
            
            map[sum] ? map[sum]++ : map[sum] = 1
            
            max = Math.max(max, map[sum])
        }
        
        return Object.values(map).filter(x => x === max).length
    };
}