{
    const partitionString = function(s) {
        let prevSymb = s[0],
            count = 0;

        for(let i = 0; i < s.length; i++) {
            if(!prevSymb.includes(s[i])) {
                prevSymb += s[i]
            } else {
                prevSymb = s[i]
                count++
            }
        }

        return count
    };

    console.log(partitionString("abacaba"))
}