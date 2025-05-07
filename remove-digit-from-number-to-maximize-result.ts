{
    function removeDigit(number: string, digit: string): string {
        let max = '';

        for (let i = 0; i < number.length; i++) {
            if (number[i] == digit) {
                const candidate = number.slice(0, i) + number.slice(i + 1);

                if (candidate > max)
                    max = candidate;
            }
        }

        return max;
    }

    console.log(removeDigit("123", "1"))
}