{
    const maximumWealth = function(accounts) {
        // const result = accounts
        //     .map(elem => 
        //         elem.reduce((acc,curr) => acc + curr,0)    
        //     )
        
        // return Math.max(...result)

        let max = 0,
            sum = max
        
        for(let i = 0;i < accounts.length; i++) {

            for(let j = 0; j < accounts[i].length; j++) {
                sum += accounts[i][j]
            }

            max = Math.max(sum, max)

            sum = 0
        }

        return max
    };

    console.log(maximumWealth([[1,2,3],[3,2,1]]))
}