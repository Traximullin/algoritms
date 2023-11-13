{
    const sortVowels = function(s) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
        const stringArr = s.split('');
        const sortedVowel = stringArr.filter((char) => vowels.has(char)).sort();

        let result = '';
        let index = 0;

        for(let i = 0; i < s.length; i++) {
            if(vowels.has(s[i])) {
                result += sortedVowel[index++]
            } else {
                result += s[i]
            }
        }

        return result
    };

    console.log(sortVowels("lEetcOde"))
}