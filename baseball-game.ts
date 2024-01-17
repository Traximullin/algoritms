{
    function calPoints(operations: string[]): number {
        let result: number[] = [];

        for(const operation of operations) {
            if(!Number.isNaN(+operation)) {
                result.push(+operation)
            }
            if(operation === 'C') {
                result.pop()
            }
            if(operation === "D") {
                result.push(result.at(-1) * 2)
            }
            if(operation === "+") {
                result.push(result.at(-1) + result.at(-2))
            }
        }

        return result.reduce((a,b) => a + b, 0)
    };

    console.log(calPoints(["5","2","C","D","+"]))
    console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
}