{
    function findThePrefixCommonArray(A: number[], B: number[]): number[] {
        const result = new Array(A.length).fill(0);

        const set = new Set();

        for (let i = 0; i < A.length; i++) {
            set.add(B[i]);

            let c = 0;

            A.slice(0, i + 1).forEach(item => {
                if (set.has(item))
                    c += 1;
            })

            result[i] = c;
        }

        return result;
    };

    console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4]))
}