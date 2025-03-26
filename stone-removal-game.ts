{
    function canAliceWin(n: number): boolean {
        let step = 10;
        let flag = false;

        while (step <= n) {
            n = n - step;
            step -= 1;
            flag = true;

            if (step <= n) {
                n = n - step;
                step -= 1;
                flag = false;
            }
        }

        return flag;
    };

    console.log(canAliceWin(19))
}