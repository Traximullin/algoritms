{
    function balancedStringSplit(string: string): number {
        let count = 0,
            l = 0,
            r = 0

        for(const char of string) {
            if(char === "L") l++
            
            if(char === "R") r++

            if(l === r) {
                l = 0 
                r = 0
                count++
            }
        }

        return count
    };

    console.log(balancedStringSplit("RLRRLLRLRL"))


}