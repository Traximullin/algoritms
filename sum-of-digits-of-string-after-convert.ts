{
    function getLucky(s: string, k: number): number {
        let num = ''

        for (const char of s) {
            num += char.charCodeAt(0) - 96
        }

        while (k) {
            num = num.split("").reduce((prev, next) => prev + parseInt(next), 0).toString();

            k--
        }

        return parseInt(num);
    };

    console.log(getLucky("iiii", 1))
}