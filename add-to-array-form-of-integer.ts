{
    function addToArrayForm(num: number[], k: number): number[] {
        return String(BigInt(num.join("")) + BigInt(k)).split("").map(Number)
    };

    console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516))
}