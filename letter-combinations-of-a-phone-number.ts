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
        const result = Array(keyboards[digits[0]].length).fill('');

        for (const digit of digits) {
            console.log(digit)

            for (const [index, key_one] of keyboards[digit].split('').entries()) {
                result[index] += key_one;
            }
        }

        console.log(result)
    };

    console.log(letterCombinations('23'))

}