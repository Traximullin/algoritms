{
    const countAsterisks = function(s) {
        let count = 0

        s.split('|').forEach((sub, i) => {
          
            if (i % 2 === 0) {
                count += sub.split('').filter((c) => c === '*').length
            }

        });
        
        return count;
    };

    console.log(countAsterisks("l|*e*et|c**o|*de|"))
}