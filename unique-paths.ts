{
    function uniquePaths(m: number, n: number): number {
        let [max, min] = [m, n].sort();
        let result = 1;

        for (let i = min; --i;) result *= (max + i - 1) / i;

        return (result + 0.5) | 0;
    }
}