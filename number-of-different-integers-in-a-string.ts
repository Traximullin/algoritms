{

    function numDifferentIntegers(word: string): number {
        word = word.replace(/[^0-9, ]/g," ");
        
        return new Set(word.split(' ').filter(Boolean).map(BigInt)).size
    };


    console.log(numDifferentIntegers("a123bc34d8ef34"))
}