{
    function findMinimumOperations(s1: string, s2: string, s3: string): number {
        let c = 0;

        for (let i = 0; i < s1.length; i++) {
            const prefix = s1.slice(0, i + 1);

            const condition = s2.startsWith(prefix) && s3.startsWith(prefix);

            if (condition) {
                c = i + 1;
            }
        }

        return c || -1;
    };

    console.log(findMinimumOperations('a', 'a', 'a'))
}