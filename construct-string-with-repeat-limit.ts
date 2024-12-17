{
    function repeatLimitedString(s: string, repeatLimit: number): string {
        const hash = new Map();
        s = s.split('').sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0)).join("");

        let r = "";

        for (let i = 0; i < s.length; i++) {
            const new_value = (hash.get(s[i]) || 0) + 1;

            hash.set(s[i], new_value);
        }

        let current = "";

        hash.forEach((item, value) => {
            current = value;

            const test = hash.get(current);

            hash.set(current, test - repeatLimit);

            r += value.repeat(repeatLimit)
        })

        console.log(r)
        console.log(hash)
    };

    console.log(repeatLimitedString("aababab", 2))

}