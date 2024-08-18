{
    function isFascinating(n: number): boolean {
        const candidate = n.toString() + (2 * n).toString() + (3 * n).toString();
        const set = new Set();

        for (const char of candidate) {
            if (set.has(char) || char === "0") 
                return false
            else 
                set.add(char)
        }

        return true;
    };

    console.log(isFascinating(267))

}