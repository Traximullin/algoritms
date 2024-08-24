{
    function removeAnagrams(words: string[]): string[] {
        const result: string[] = [];

        let prev = "";


        for (const word of words) {
            const chars = word.split("").sort().join("");
            
            if (prev === chars) 
                continue;

            prev = chars;
            result.push(word);
        }
        

        return result;
    };

    console.log(removeAnagrams(["а","б","а"]))


}