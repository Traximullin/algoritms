{
    function helper(num: number, search_number: number) {
        const diff = num.toString().split('').reduce((prev, next) => prev * Number(next), 1);

        return diff % search_number === 0
    }



    function smallestNumber(n: number, t: number): number {
        for (let i = 0; i <= 9; ++i) {
            const candidate = n + i;

            if (helper(candidate, t)) {
                return candidate;
            }
        }

        return n
    };
    
    console.log(smallestNumber(10, 2))
}