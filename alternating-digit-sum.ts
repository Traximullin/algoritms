{
    function alternateDigitSum(n: number): number {
        const n_stirng  = n.toString()

        let sum = 0

        for (let i =0; i < n_stirng.length; i++){
            i % 2 === 0 
                ? sum += ~~n_stirng[i]
                : sum -= ~~n_stirng[i]
        }

        return sum
    };

}