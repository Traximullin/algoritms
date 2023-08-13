{
    const titleToNumber = function(columnTitle) {
        let sum = 0,
            index = 1

        for(let i = columnTitle.length - 1; i >= 0; i--) {
            sum += index * (columnTitle[i].charCodeAt() - 64)
            index *= 26 // all
        }

        return sum
    };

    console.log(titleToNumber("Z"))
}