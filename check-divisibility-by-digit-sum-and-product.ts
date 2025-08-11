{
    function checkDivisibility(n: number): boolean {
        const str = n.toString();

        let sum = 0,
            mul = 1;
        
        for (let i = 0; i < str.length; i++) {
            const digit = parseInt(str[i]);
            sum += digit;
            mul *= digit;
        }

        return n % (sum + mul) == 0;
    }
}