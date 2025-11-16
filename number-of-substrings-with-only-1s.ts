{
    function numSub(s: string): number {
        let amount = 0;
        let count = 0;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "0" && amount > 0) {
                amount = 0;
            }
            if (s[i] === "1") {
                amount++;
                count += amount;
            }
        }

        return count % (10 ** 9 + 7);
    }
}