{
    function checkPerfectNumber(num: number): boolean {
        if (num == 1) 
            return false
        
        let c = 1;

        for (let i = 2; i < num; i++) {

            if (num % i == 0)
                c += i

        }

        return num == c
    };

    console.log(checkPerfectNumber(28))
}