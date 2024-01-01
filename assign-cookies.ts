{
    const findContentChildren = function(g, s) {
        g.sort((a, b) => a - b)
        s.sort((a, b) => a - b)
    
        let output = 0;

        for(const cookie of s) {
            if(cookie >= g[output])
                output += 1
        }

        return output
    };
}