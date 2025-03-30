{
    function grayCode(n: number): number[] {
        if (n == 0)
            return [0];

        const arr= grayCode(n - 1);
        const offset = 1 << (n - 1);

        return [...arr, ...arr.map(num => num | offset).reverse()];
    };
}