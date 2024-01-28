{
    // todo 
    // https://leetcode.com/problems/lemonade-change/description/
    // очередь написать 
    const lemonadeChange = function(bills) {
        let count = 0;

        for(let bill of bills) {
            if(bill === 5) {
                count += 5;
                continue
            }

            const test = bill - 5;

            if(test <= count) {
                count -= test;
            }

        }

        return count > 0
    };

    console.log(lemonadeChange([5,5,5,10,20]))
    console.log(lemonadeChange([5,5,10,10,20]))
}