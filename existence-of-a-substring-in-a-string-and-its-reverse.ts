{
    function isSubstringPresent(s: string): boolean {
        const reverse_string = s.split('').reverse();

       for (let i = 0; i < reverse_string.length - 1; i++) {
            const candidate = reverse_string[i] + reverse_string[i + 1];

            if (s.includes(candidate)) 
                return true
       }

       return false
    };

    console.log(isSubstringPresent("leetcode"))
}