{
    const countKeyChanges = function(s) {
        s = s.toLowerCase();

        let c = 0;

        for(let i = 0; i < s.length - 1; i++) {
            if(s[i]!== s[i + 1]) {
                c++
            }
        }

        return c
    };

    console.log(countKeyChanges('aAbBcC'))
}