{
    function distributeCandies(candies: number, num_people: number): number[] {
        const result: number[] = new Array(num_people).fill(0);

        let i = 1;

        while (candies > 0) {
            const index = (i - 1) % num_people;

            result[index] += Math.min(i, candies);
            
            candies = candies - i;
            i += 1;
        }

        return result
    };

    console.log(distributeCandies(10, 3))
    console.log(distributeCandies(7, 4))


    // function distributeCandies(candies: number, num_people: number): number[] {
    //     const result: number[] = Array.from<number>({length: num_people}).fill(0);
    //     let i = 0;

    //     while (candies >= 0) {
    //         const index = i % num_people;

    //         result[index] = candies - i + 1;

    //         i += 1;
    //         candies -= i;
    //     }

    //     return result
    // };

}