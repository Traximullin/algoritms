{
    function minChanges(s: string): number {
        let c = 0;

        for (let i = 1; i < s.length; i += 2) 
            if (s[i] !== s[i - 1])
                c += 1;

        return c;
    };

 
    console.log(minChanges("1001"))
}