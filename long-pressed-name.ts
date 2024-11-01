{
    function isLongPressedName(name: string, typed: string): boolean {
        const uniqueName = [...new Set(name)].join('');
        const uniqueTyped = [...new Set(typed)].join('');

        if (uniqueName !== uniqueTyped)
            return false

        const dp = new Array(26).fill(0);

        for (const char of typed) {
            dp[char.charCodeAt(0) - 97] += 1;
        }

        for (const char of name) {
            dp[char.charCodeAt(0) - 97] -= 1;
        }

        console.log(dp)
        return dp.every(item => item >= 0)
    };

    console.log(isLongPressedName('alex', 'aaleexa'))
}