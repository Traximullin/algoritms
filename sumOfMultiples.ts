{
    const hepler = (num) => {
        return num % 3 === 0 || num % 5 === 0 || num % 7 === 0
    }

    const sumOfMultiples = function(n) {
        let sum = 0

        for(let i = 1; i <= n; i++) {

            if(hepler(i)) {
                sum += i
            }

        }

        return sum
    };


    console.log(sumOfMultiples(7))
}