{
    function maxDifference(s: string): number {
        const hash: Record<string, number> = {};

        for(const char of s) {
            hash[char] ??= 0
            hash[char]++
        }


        let odd = 0
        let even = 100
        
        for(const count of Object.values(hash)) {
            if (count % 2) {
                odd = Math.max(odd, count)
            } else {
                even = Math.min(even, count)
            }
        }

        return odd - even
    };

    console.log(maxDifference("tzt"))

}