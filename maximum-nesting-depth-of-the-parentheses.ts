{
    const maxDepth = function(s) {
        let max = 0,
            open = 0;

        for(let i = 0;i < s.length; i++) {
            if(s[i] === '(')
                max = Math.max(max, ++open)
            if(s[i] === ')')
                open--
        }

        return max
    };

    console.log(maxDepth("(1+(2*3)+(( 8 )/4))+1"))
}