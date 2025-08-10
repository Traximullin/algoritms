{
    function countAndSay(n: number): string {
        if (n == 1)
            return "1";

        let oldCode = countAndSay(n - 1);
        let newCode = "";
        let previousDigit = oldCode.charAt(0);
        let previousDigitCount = 1;

        for (let i = 1; i < oldCode.length; i++) {
            let thisChar = oldCode.charAt(i);

            if (thisChar != previousDigit) {
                newCode = newCode.concat(previousDigitCount + previousDigit);
                previousDigit = thisChar;
                previousDigitCount = 1;
            } else {
                previousDigitCount += 1;
            }
        }

        return newCode.concat(previousDigitCount + previousDigit);
    };
}