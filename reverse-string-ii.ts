{
    function reverseStr(s: string, k: number): string {
        for (let i = 0; i < s.length; i += k * 2) {
            const replace = s.slice(i, i + k);
            const new_chars = replace.split("").reverse().join("");

            s = s.replace(replace, new_chars);
        }

        return s;
    };

    console.log(reverseStr("abcd", 2))
}