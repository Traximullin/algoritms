{
    const lemonadeChange = function(bills) {
        const cash = {
            5: 0,
            10: 0,
        }

        const cashController = {
            5: () => {
                cash[5] += 1;
            },
            10: () => {
                if (cash[5] > 0) {
                    cash[5] -= 1;
                    cash[10] += 1;
                } else {
                    return false
                }
            },
            20: () => {
                if (cash[5] > 0 && cash[10] > 0) {
                    cash[5] -= 1;
                    cash[10] -= 1;
                } else if (cash[5] >= 3) {
                    cash[5] -= 3;
                } else {
                    return false
                }
            }
        } 

        for (const bill of bills) {
            if (cashController[bill]() === false) {
                return false
            }
        }

        return true
    };

    console.log(lemonadeChange([5,5,5,10,20]))
}