{
    function minimumPushes(word: string): number {
        const alp = Array(26).fill(0);

        for (const char of word) {
            alp[char.charCodeAt(0) - 97] += 1;
        }

        const keyboard = alp.sort((b,a) => a - b).reduce((acc, _, i) => {
            if (i % 8 === 0) acc.push(alp.slice(i, i + 8));
        
            return acc;
        }, []);

        return keyboard.reduce((prev, curr, index) => {
            const sum = curr.reduce((prev, next) => prev + next, 0) * (index + 1)

            return prev += sum;
        }, 0);
    };

    console.log(minimumPushes('xycdefghij'))
}