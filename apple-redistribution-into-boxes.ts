{
    function minimumBoxes(apple: number[], capacity: number[]): number {
        let count = apple.reduce((prev, curr) => prev + curr, 0);
        let r = 0;

        for (const cap of capacity.sort((a, b) => b - a)) {
            if (count <= 0) {
                return r;
            }

            count -= cap
            r += 1;
        }

        return r;
    };

    // console.log(minimumBoxes([1,3,2], [4,3,1,5,2]))
    // console.log(minimumBoxes([5,5,5], [2,4,2,7]))
    console.log(minimumBoxes([9,8,8,2,3,1,6],  [10,1,4,10,8,5]    ))
}