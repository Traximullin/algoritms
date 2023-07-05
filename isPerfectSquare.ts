{
    const isPerfectSquare = function(num) {
        let count = 1

        while(count <= num) {
            const square = count * count
            count += 1
            if(num === square) {
                return true
            }
            if(square > num) {
                return false
            }
        }
    };

    console.log(isPerfectSquare(1))
    // console.log(isPerfectSquare(14))
}