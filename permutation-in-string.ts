{
    function checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length)
            return false;

        const arr_s1 = Array(26).fill(0);
        const arr_s2 = Array(26).fill(0);

        for (const char of s1) {
            const b_char = char.charCodeAt(0) - 97;

            arr_s1[b_char] += 1;
            arr_s2[b_char] += 1;
        }

        if (arr_s1.toString() === arr_s2.toString()) 
            return true;

        for (let i = s1.length; i < s2.length; i++) {
            const test = 
        }

        console.log(arr_s1)
        console.log(arr_s2)
    };

    console.log(checkInclusion('ab', 'eidbaooo'))
}