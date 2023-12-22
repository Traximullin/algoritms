{
    function maxScore(s) {
        let left = 0,
            right = s.split("").filter(x => x == '1').length,
            max = 0;

        for(let i = 0; i < s.length - 1; i++) {
            if(s[i] == '0') {
                left += 1
            } else {
                right -= 1
            }
            
            max = Math.max(max, left + right)
        }

        return max
    };

    console.log(maxScore('011101'))
}