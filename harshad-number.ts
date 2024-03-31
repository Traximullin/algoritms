{
    function sumOfTheDigitsOfHarshadNumber(x: number): number {
        const sum = String(x).split('').reduce((prev, next) => +prev + +next, 0)

        return x % sum === 0 ? sum : -1
    };

    console.log(sumOfTheDigitsOfHarshadNumber(18))
}