{
    const findComplement = function(num) {
        let b = num.toString(2);

        let res = ''

        for(let c of b){
            if(c=='1') {
                res+='0'
            } else {
                res+='1'
            }

        }

        return parseInt(res,2)
    };
}