{
    const keyboards: Record<string, string> = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    function letterCombinations(digits: string): string[] {
        const result: string[] = [];
        const current = digits[0];

        const current_key = keyboards[current];

        for (let i = 0; i < current_key.length; i++) {
            console.log(current_key[i])

            

        }

        console.log(result)
    };

    console.log(letterCombinations('23'))

}