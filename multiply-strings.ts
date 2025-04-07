{

    function splitTens(n: number) {
        return [Math.floor(n / 10), n % 10];
    }

    
    function multiply(num1: string, num2: string): string {
        const res = [];
        let rem = 0;

        for (let i = num2.length - 1; i >= 0; i--) {
            const number_num = Number(num2[i]);
            let res = "";

            for (let j = num1.length - 1; j >= 0; j--) {
                console.log(num1[j])

                const test = 
            }
        }

        console.log(res)
    };

    console.log(multiply("123", "456"))
}