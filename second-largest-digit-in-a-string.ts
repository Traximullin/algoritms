{
    function secondHighest(s: string): number {
        const set: Set<number> = new Set();

        for (let i = 0; i < s.length; i++) {
            if (s[i].toLowerCase() === s[i].toUpperCase())
                set.add(parseInt(s[i]))
        }

        const result = Array.from(set).sort((a,b) => b - a)[1];

        return result ?? -1
    };

    console.log(secondHighest("ck077"))
}