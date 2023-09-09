{
    const prefixCount = function(words, pref) {
        const prefLength = pref.length;

        let count = 0;

        for(const word of words) {
            if(word.slice(0,prefLength) === pref)
                count++ 
        }

        return count
    };   

    console.log(prefixCount(["pay","attention","practice","attend"], "at"))
}