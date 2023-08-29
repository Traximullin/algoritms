{
    // !TODO
    // https://leetcode.com/problems/pascals-triangle/
    const generate = function(numRows) {
        const result: number[][] = []
    
        for(let i = 1; i <= numRows; i++) {
            const node: number[] = []

            for(let j = 0; j < i; j++) {
                node.push(1)
            }

            result.push(node)
        }

        return result
    };

    console.log(generate(5))
}