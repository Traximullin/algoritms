{
    function numberOfLines(widths: number[], s: string): number[] {
        let count_line = 1,
            pixels = 0;

        for(let char of s) {
            const weight = widths[char.charCodeAt(0) - 97]

            pixels += weight;

            if (pixels > 100) {
                pixels = weight;
                count_line += 1;
            }
        }

        return [count_line, pixels]
    };

    console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"))
}