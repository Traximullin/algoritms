{
    function divideString(s: string, k: number, fill: string): string[] {
        const result: string[] = [];


        for (let i = 0; i < s.length; i += k) {
            const prefix = s.slice(i, i + k);

            if (prefix.length < k) {
                const length = k - prefix.length
                result.push(prefix + fill.repeat(length))
            } else {
                result.push(prefix)
            }

        }

        return result
    };

    console.log(divideString('abcdefghi', 3, 'x'))
}