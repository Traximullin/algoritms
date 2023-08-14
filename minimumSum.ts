{
    const minimumSum = function(num) {
        const string = String(num).split('').sort()

        return ~~(string[0] + string[2]) + ~~(string[1] + string[3])
    };

    console.log(minimumSum(4009))
}