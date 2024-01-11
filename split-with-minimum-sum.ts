{
    const splitNum = function(num) {
        num = String(num).split('').sort();
        
        let num_one = '';
        let num_two = '';

        for(let i = 0; i < num.length; i++) {
            if(i % 2) {
                num_one += num[i]
                continue
            }
            
            num_two += num[i]
        }

        return Number(num_one) + Number(num_two)
    };

    console.log(splitNum(4325))
}