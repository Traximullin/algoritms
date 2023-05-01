{

    const helper = (number) => {
        const arrayNumber = Array.from(number.toString().split("."), Number)

        return arrayNumber
    }

    Math.round = function(number) {
        const [firstNumber, secondaryNumber] = helper(number)

        if(+secondaryNumber.toString()[0] >= 5) {
            return number + (1 - +`0.${secondaryNumber}`)
        }

        return firstNumber
    };
    
    Math.ceil = function(number) {
        const [firstNumber] = helper(number)

        return firstNumber + 1
    };
    
    Math.floor = function(number) {
        const [firstNumber] = helper(number)

        if(firstNumber < 0) {
            return firstNumber - 1
        }

        return firstNumber; // TODO: fix this
    };

    console.log(Math.floor(0.4));
}