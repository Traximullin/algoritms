
{
    var addTwoNumbers = function(l1, l2) {
        let count = 0
        let result = []

        for(let key in l1) {
            let number_l1 = l1[key]
            let number_l2 = l2[key] || 0
            let value = number_l1 + number_l2 + count

            if(count > 0) {
                count = 0
            }

            if(value >= 10) {
                result.push(value - 10)
                count++
                continue
            }

            result.push(value)
        }

        if(count) {
            result.push(count)
        }

        return result
    };

    l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

    console.log(addTwoNumbers(l1,l2))
    // Output: [8,9,9,9,0,0,0,1]

}