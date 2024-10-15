{
    function minimumSteps(s: string): number {
        let c = 0;

        let zeros = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === '0')
                zeros++;

            if (s[i] === '1' && zeros)
                c += zeros;
        }

        return c;
    };

    console.log(minimumSteps("101"))
}