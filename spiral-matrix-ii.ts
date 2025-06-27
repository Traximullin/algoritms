{
    function generateMatrix(n: number): number[][] {
        const nm1 = n - 1
        const nn = n * n
        const nnm1 = nn - 1
        
        let x = 0
        let y = 0
        let i = 0
        let d = 'r' as 'r' | 'd' | 'l' | 'u'

        const r = new Array<number[]>(n).fill([]).map(() => [] as number[])
        
        while (true) {
            if (d === 'r' && (x === nm1 || r[y][x + 1] !== undefined)) d = 'd'
            
            if (d === 'd' && (y === nm1 || r[y + 1][x] !== undefined)) d = 'l'

            if (d === 'l' && (x === 0 || r[y][x - 1] !== undefined)) d = 'u'

            if (d === 'u' && (y === 0 || r[y - 1][x] !== undefined)) d = 'r'

            r[y][x] = i + 1

            if (i === nnm1) return r
            
            i++
            if (d === 'r') x++
            if (d === 'd') y++
            if (d === 'l') x--
            if (d === 'u') y--
        }
        };
}