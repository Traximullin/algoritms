{
    function bitwiseComplement(n: number): number {
        const r = n.toString(2).split('').map(char => char === '1' ? '0' : '1').join('')

        return parseInt(r,2)
    };

    console.log(bitwiseComplement(5))
}