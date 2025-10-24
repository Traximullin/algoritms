{
    function nextBeautifulNumber(n: number): number {
        let i = n + 1;

        while (true) {
            const str = i.toString();
            if (str.includes("0")) {  
                i++;
                continue;
            }

            const freq = new Map<string, number>();
            for (const ch of str) {
                freq.set(ch, (freq.get(ch) || 0) + 1);
            }

            let isBeautiful = true;
            for (const [digit, count] of freq) {
                if (Number(digit) !== count) {
                    isBeautiful = false;
                    break;
                }
            }

            if (isBeautiful) return i; 
            i++;
        }
    }
}