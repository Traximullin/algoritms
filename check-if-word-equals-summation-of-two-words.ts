{
    function convertStringToNumber(str: string) {
        return parseInt([...str].map((element) => element.charCodeAt(0) - 97).join(""))
    }

    function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
        return convertStringToNumber(firstWord) + convertStringToNumber(secondWord) === convertStringToNumber(targetWord)
    };

    console.log(isSumEqual('acb', 'cba', 'cdb'))
}