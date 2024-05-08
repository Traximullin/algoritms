{
    function digitCount(num: string): boolean {
        const hash = new Map();

        for(let i = 0; i < num.length; i++) {
            const value = (hash.get(num[i]) || 0) + 1;

            hash.set(num[i], value)
        }

        for (let i = 0; i < num.length; i++) {
            const value = hash.get(i.toString()) || 0;

            if(value !== Number(num[i])) {
                return false
            }
        }

        return true
    };

    console.log(digitCount("1210"))
}