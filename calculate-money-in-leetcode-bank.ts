{
    const totalMoney = function(n) {
        let count = 0;
        let week = 0;
        let day = 1;

        for(let i = 1; i <= n; i++) {
            count += day + week
            day++
            
            if(i % 7 == 0) {
                week += 1
                day = 1;
            }

        }

        return count
    };

    console.log(totalMoney(10))
}