{
    const reformat = function(s) {
        const sym = [];
        const num = [];

        let r = '';
    
        for(let i = 0; i < s.length; i++) {
            if(Number.isNaN(+s[i])) {
                sym.push(s[i])
            } else {
                num.push(s[i])
            }
        }

        if(Math.abs(sym.length - num.length) > 1) 
            return ''

        for(let i = 0; i < s.length / 2; i++) {
            if (sym.length > num.length) {
                r += sym[i];
                r += num[i] || '';
            } else {
                r += num[i];
                r += sym[i] || '';
            }
        }        


        return r
    };

    console.log(reformat('covid2019'))
}