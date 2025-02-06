{
    function largeGroupPositions(s: string): number[][] {
        let c = 1;
        let start = 0;

        let r: number[][] = [];

        for (let i = 1; i < s.length; i++) {
            if (s[i] === s[i - 1]) {
                c += 1;
                continue;
            } else {
                if (c >= 3) {
                    r.push([start, start + c - 1]);
                }
                c = 1;
                start = i;

            }

        }
        
        if (c >= 3) {
            r.push([start, start + c - 1]);
        }

        return r;
    };

    console.log(largeGroupPositions("ааа"))
}