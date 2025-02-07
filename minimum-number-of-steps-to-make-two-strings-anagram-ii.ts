{
    function minSteps(s: string, t: string): number {
        const arr = new Array(26).fill(0);

        const arr_1 = new Array(26).fill(0);

        for (const char of s) {
            arr[char.charCodeAt(0) - 97] += 1;
        }

        for (const char of t) {
            arr_1[char.charCodeAt(0) - 97] += 1;
        }
        
        let c = 0;

        for (let i = 0; i < arr.length; i++) {
            c += Math.abs(arr[i] - arr_1[i])
        }

        return c;
    };

    console.log(minSteps("leetcode", "coats"))
}