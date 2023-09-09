{
    const maximumValue = function(strs) {
        return Math.max(...strs.map((str) => Number.isInteger(+str) ? +str : str.length))
    };

    console.log(maximumValue(["alic3","bob","3","4","00000"]))
}