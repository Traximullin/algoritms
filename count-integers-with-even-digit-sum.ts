{
    function countEven(num: number): number {
        let c = 0;

        while (num) {
            const num_sum = num.toString().split('').reduce((prev, next) => prev + Number(next), 0);
            
            if (num_sum % 2 === 0)
                c ++

            num -= 1;
        }

        return c
    };

    console.log(countEven(30))
}