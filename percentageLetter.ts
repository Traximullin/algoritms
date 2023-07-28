{
    const percentageLetter = function(s, letter) {
        let count = 0
        for(let symb of s) {
            if(symb === letter) 
                count++
        }

        return ~~(count / s.length * 100)
    };

    console.log(percentageLetter("sgawtb", "s"))
}