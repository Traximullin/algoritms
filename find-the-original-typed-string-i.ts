{
    function possibleStringCount(word: string): number {
        let c = 1;

        for (let i = 1; i < word.length; i++) {
            if (word[i - 1] == word[i])
                c++;
        };

        return c;
    };

    console.log(possibleStringCount('abbcccc'))
}