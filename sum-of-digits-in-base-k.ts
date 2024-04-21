{
    function sumBase(n: number, k: number): number {
        return n.toString(k).split('').reduce((prev, next) => prev + Number(next), 0)
    };

    console.log(sumBase(34, 6))

}