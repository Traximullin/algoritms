{
    function integerReplacement(n: number): number {
        let c = 0;

        while (n !== 1) {

            if (n % 2 == 0) {
                n /= 2;
            } else {
                 if ((n + 1) % 4 == 0 && (n - 1 != 2)) 
                    n += 1;
                else
                    n -= 1;
            }

            c += 1;
        }

        return c;
    };

    console.log(integerReplacement(65535))
}