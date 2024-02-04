{
    const shortestToChar = function(s, c) {
        let prev = s.indexOf(c)
        let next = prev;

        const r: number[] = []
    
        for(let i = 0; i < s.length; i++) {

            if (s[i] === c) {
                prev = i;
                next = s.indexOf(c, prev + 1);
            }

            r.push(
                Math.min(
                    Math.abs(prev - i),
                    Math.abs(next - i)
                )
            )

        }

        return r
    };

    console.log(shortestToChar('loveleetcode', 'e'))
}