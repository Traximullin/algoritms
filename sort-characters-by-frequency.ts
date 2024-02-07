{
    function frequencySort(s: string): string {
        const hash = new Map();

        for(let i = 0; i < s.length; i++) {
            const char = s[i];

            if(!hash.has(char)) {
                hash.set(char, 1);
                continue;
            } 
            hash.set(char,hash.get(char) + 1)
        }

        return s.split('').sort((a,b) => 
            hash.get(a) === hash.get(b) 
                ?  a.charCodeAt(0) - b.charCodeAt(0)
                : hash.get(b) - hash.get(a)).join('')
    };

    console.log(frequencySort('loveleetcode'))
}