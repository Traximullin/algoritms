{
    function isPrefixOfWord(sentence: string, searchWord: string): number {
        const result =
            sentence.split(" ").findIndex(
                word => word.startsWith(searchWord)
            )


        return result >= 0 ? result + 1 : result
    };

}