{
    function generateKey(num1: number, num2: number, num3: number): number {
        const nums = [num1, num2, num3];
        const max_length = Math.max(...nums).toString().length;

        const r = new Array(max_length).fill('9')

        for (const num of nums) {
            const chars = num.toString().padStart(max_length, "0");

            for (let i = 0; i < chars.length; i++) {
                if (r[i] > chars[i]) {
                    r[i] = chars[i]
                }
            }

        }

        return Number(r.join(""));
    };

    console.log(generateKey(1, 10, 1000))
}