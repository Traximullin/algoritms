{
    var finalValueAfterOperations = function(operations) {
        let count = 0

        operations.forEach((operation) => {
            if(operation.includes("+")) {
                count++
            }

            if(operation.includes("-")) {
                count--
            }
        })

        return count

    };

    console.log(finalValueAfterOperations(["--X","X++","X++"]))
}